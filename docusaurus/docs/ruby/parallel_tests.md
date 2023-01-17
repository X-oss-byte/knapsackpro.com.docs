---
pagination_next: null
pagination_prev: null
---

# Use Knapsack Pro with `parallel_tests`

:::caution
We recommend using Knapsack Pro with more CI nodes instead of `knapsack_pro` + `parallel_tests` with fewer CI nodes.
:::

In our experience, parallelizing tests by running more than one process per CI node can result in slower test suites. In fact, it's easy to saturate CPU/RAM/IO when running multiple tests in parallel on a single CI node, especially with E2E tests.

To keep it simple, we recommend against `parallel_tests`. Instead, consider more parallel CI nodes with Knapsack Pro in [Queue Mode](https://github.com/KnapsackPro/knapsack_pro-ruby#queue-mode) if you are looking for fast tests execution and avoiding [confusing terminal outputs](https://github.com/grosser/parallel_tests/issues?q=is%3Aissue+is%3Aopen+output).

In some cases, you may still consider using `knapsack_pro` to exploit auto-balancing the tests split with [Queue Mode](https://github.com/KnapsackPro/knapsack_pro-ruby#queue-mode) and `parallel_tests` to use fewer CI nodes. But keep your eyes on the [Knapsack Pro dashboard](/overview/#dashboard) to check if your CI nodes are saturated:
- [Execution times](https://knapsackpro.com/dashboard/organizations/3491/projects/2077/test_suites/3135/builds/edcd207e-4280-42e7-b90f-cc2e6a6392ff#tab-test-files) of your CI builds are increasing
- [Individual test stats](https://knapsackpro.com/dashboard/organizations/3491/projects/2077/test_suites/3135/builds/test_files_history) are trending up
- Tests executed locally on your machine are faster than on your CI
- Reducing the number of `parallel_tests` processes or using more powerful CI nodes reduces build times

## Example: `parallel_tests` with `knapsack_pro` on parallel CI nodes

:::info
Do this only if you have powerful CI nodes with a lot of CPU/RAM/IO that can handle multiple `parallel_tests` processes.
:::

Goal:
- 2 CI nodes
- 3 processes per CI node
- 6 total parallel processes

On each CI node execute (refer to your CI docs for `$MY_CI_NODE_TOTAL` and `$MY_CI_NODE_INDEX`):

```bash
export PARALLEL_TESTS_CONCURRENCY=3

RAILS_ENV=test \
KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC=$MY_TOKEN \
KNAPSACK_PRO_CI_NODE_TOTAL=$MY_CI_NODE_TOTAL \
KNAPSACK_PRO_CI_NODE_INDEX=$MY_CI_NODE_INDEX \
bundle exec parallel_test -n $PARALLEL_TESTS_CONCURRENCY -e './bin/parallel_tests'
```

Create `bin/parallel_tests` and make it executable `chmod u+x`:

```bash
#!/bin/bash

# The Knapsack Pro API sees 3 * 2 = 6 parallel nodes
export KNAPSACK_PRO_CI_NODE_TOTAL=$(( $PARALLEL_TESTS_CONCURRENCY * $KNAPSACK_PRO_CI_NODE_TOTAL ))

if [ "$TEST_ENV_NUMBER" == "" ]; then
  export PARALLEL_TESTS_CONCURRENCY_INDEX=0
else
  export PARALLEL_TESTS_CONCURRENCY_INDEX=$(( $TEST_ENV_NUMBER - 1 ))
fi

# The current index for the Knapsack Pro API is {0,1,2} + (3 * {0,1}) in other words either {0,1,2,3,4,5}
KNAPSACK_PRO_CI_NODE_INDEX=$(( $PARALLEL_TESTS_CONCURRENCY_INDEX + ($PARALLEL_TESTS_CONCURRENCY * $KNAPSACK_PRO_CI_NODE_INDEX) ))

# Debug log
echo KNAPSACK_PRO_CI_NODE_TOTAL=$KNAPSACK_PRO_CI_NODE_TOTAL KNAPSACK_PRO_CI_NODE_INDEX=$KNAPSACK_PRO_CI_NODE_INDEX PARALLEL_TESTS_CONCURRENCY=$PARALLEL_TESTS_CONCURRENCY

bundle exec rake knapsack_pro:queue:rspec
```

Running the above on CI should result in:

* First CI node:
  ```bash
  KNAPSACK_PRO_CI_NODE_TOTAL=6 KNAPSACK_PRO_CI_NODE_INDEX=0 PARALLEL_TESTS_CONCURRENCY=2
  KNAPSACK_PRO_CI_NODE_TOTAL=6 KNAPSACK_PRO_CI_NODE_INDEX=1 PARALLEL_TESTS_CONCURRENCY=2
  # ...
  ```

* Second CI node:
  ```bash
  KNAPSACK_PRO_CI_NODE_TOTAL=6 KNAPSACK_PRO_CI_NODE_INDEX=2 PARALLEL_TESTS_CONCURRENCY=2
  KNAPSACK_PRO_CI_NODE_TOTAL=6 KNAPSACK_PRO_CI_NODE_INDEX=3 PARALLEL_TESTS_CONCURRENCY=2
  # ...
  ```

* Third CI node:
  ```bash
  KNAPSACK_PRO_CI_NODE_TOTAL=6 KNAPSACK_PRO_CI_NODE_INDEX=4 PARALLEL_TESTS_CONCURRENCY=2
  KNAPSACK_PRO_CI_NODE_TOTAL=6 KNAPSACK_PRO_CI_NODE_INDEX=5 PARALLEL_TESTS_CONCURRENCY=2
  # ...
  ```

## Example: `parallel_tests` with `knapsack_pro` on a single CI node

:::info
Do this only if you have a single powerful CI node with a lot of CPU/RAM/IO that can handle multiple `parallel_tests` processes.
:::

Goal:
- 1 CI node
- 3 processes per CI node
- 3 total parallel processes

On the single CI node execute:

```bash
export PARALLEL_TESTS_CONCURRENCY=3

RAILS_ENV=test \
  KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC=$MY_TOKEN \
  PARALLEL_TESTS_CONCURRENCY=$PARALLEL_TESTS_CONCURRENCY \
  bundle exec parallel_test -n $PARALLEL_TESTS_CONCURRENCY -e './bin/parallel_tests'
```

Create `bin/parallel_tests` and make it executable `chmod u+x`:

```bash
#!/bin/bash

# The Knapsack Pro API sees 3 parallel nodes
export KNAPSACK_PRO_CI_NODE_TOTAL=$PARALLEL_TESTS_CONCURRENCY

if [ "$TEST_ENV_NUMBER" == "" ]; then
  export PARALLEL_TESTS_CONCURRENCY_INDEX=0
else
  export PARALLEL_TESTS_CONCURRENCY_INDEX=$(( $TEST_ENV_NUMBER - 1 ))
fi

# The current index for the Knapsack Pro API is {0,1,2}
KNAPSACK_PRO_CI_NODE_INDEX=$PARALLEL_TESTS_CONCURRENCY_INDEX

# Debug log
echo KNAPSACK_PRO_CI_NODE_TOTAL=$KNAPSACK_PRO_CI_NODE_TOTAL KNAPSACK_PRO_CI_NODE_INDEX=$KNAPSACK_PRO_CI_NODE_INDEX PARALLEL_TESTS_CONCURRENCY=$PARALLEL_TESTS_CONCURRENCY

bundle exec rake knapsack_pro:queue:rspec
```

Running the above on CI should result in:

* First (and only) CI node:

```
KNAPSACK_PRO_CI_NODE_TOTAL=3 KNAPSACK_PRO_CI_NODE_INDEX=0 PARALLEL_TESTS_CONCURRENCY=3
KNAPSACK_PRO_CI_NODE_TOTAL=3 KNAPSACK_PRO_CI_NODE_INDEX=1 PARALLEL_TESTS_CONCURRENCY=3
KNAPSACK_PRO_CI_NODE_TOTAL=3 KNAPSACK_PRO_CI_NODE_INDEX=2 PARALLEL_TESTS_CONCURRENCY=3
# ...
```

## Related FAQs

- [How to run `knapsack_pro` with `parallel_tests` gem?](https://knapsackpro.com/faq/question/how-to-run-knapsack_pro-with-parallel_tests-gem)
- [`parallel_tests` with `knapsack_pro` on parallel CI nodes](https://knapsackpro.com/faq/question/parallel_tests-with-knapsack_pro-on-parallel-ci-nodes)
- [`parallel_tests` with `knapsack_pro` on single CI machine](https://knapsackpro.com/faq/question/parallel_tests-with-knapsack_pro-on-single-ci-machine)