"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[126],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),k=n,m=c["".concat(l,".").concat(k)]||c[k]||d[k]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={pagination_next:null,pagination_prev:null},s="Troubleshooting",i={unversionedId:"ruby/troubleshooting",id:"ruby/troubleshooting",title:"Troubleshooting",description:"NameError:MyModelName",source:"@site/docs/ruby/troubleshooting.md",sourceDirName:"ruby",slug:"/ruby/troubleshooting",permalink:"/ruby/troubleshooting",draft:!1,editUrl:"https://github.com/KnapsackPro/docs.knapsackpro.com/tree/main/docusaurus/docs/ruby/troubleshooting.md",tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null},sidebar:"sidebar"},l={},p=[{value:"<code>NameError: uninitialized constant MyModule::MyModelName</code>",id:"nameerror-uninitialized-constant-mymodulemymodelname",level:2},{value:"Debug Knapsack Pro on your development environment/machine",id:"debug-knapsack-pro-on-your-development-environmentmachine",level:2},{value:"Regular Mode",id:"regular-mode",level:3},{value:"Queue Mode",id:"queue-mode",level:3},{value:"Knapsack Pro hangs",id:"knapsack-pro-hangs",level:2},{value:"Knapsack Pro does not work on a forked repository",id:"knapsack-pro-does-not-work-on-a-forked-repository",level:2},{value:"Error <code>commit_hash</code> parameter is required",id:"error-commit_hash-parameter-is-required",level:2},{value:"<code>LoadError: cannot load such file -- spec_helper</code>",id:"loaderror-cannot-load-such-file----spec_helper",level:2},{value:"CI builds fail with <code>Test::Unit</code> but all tests passed",id:"ci-builds-fail-with-testunit-but-all-tests-passed",level:2},{value:"Tests hitting external APIs fail",id:"tests-hitting-external-apis-fail",level:2},{value:"<code>OpenSSL::SSL::SSLError</code>",id:"opensslsslsslerror",level:2},{value:"<code>ActiveRecord::SubclassNotFound</code>",id:"activerecordsubclassnotfound",level:2},{value:"Adding parallel CI nodes/jobs makes test slower",id:"adding-parallel-ci-nodesjobs-makes-test-slower",level:2},{value:"Some tests were skipped in Regular Mode",id:"some-tests-were-skipped-in-regular-mode",level:2},{value:"FactoryBot/FactoryGirl raises in Queue Mode",id:"factorybotfactorygirl-raises-in-queue-mode",level:2},{value:"One CI node run the test suite again in Queue Mode",id:"one-ci-node-run-the-test-suite-again-in-queue-mode",level:2},{value:"Rake tasks under tests are run more than once in Queue Mode",id:"rake-tasks-under-tests-are-run-more-than-once-in-queue-mode",level:2},{value:"Tests distribution is unbalanced in Queue Mode",id:"tests-distribution-is-unbalanced-in-queue-mode",level:2},{value:"Related FAQs",id:"related-faqs",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h2",{id:"nameerror-uninitialized-constant-mymodulemymodelname"},(0,n.kt)("inlineCode",{parentName:"h2"},"NameError: uninitialized constant MyModule::MyModelName")),(0,n.kt)("p",null,"Try with full namespacing ",(0,n.kt)("inlineCode",{parentName:"p"},"::SomeModule::MyModule::MyModelName"),"."),(0,n.kt)("h2",{id:"debug-knapsack-pro-on-your-development-environmentmachine"},"Debug Knapsack Pro on your development environment/machine"),(0,n.kt)("h3",{id:"regular-mode"},"Regular Mode"),(0,n.kt)("p",null,"To reproduce what Knapsack Pro executed on a specific CI node, check out the same branch and run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC=MY_TOKEN \\\nKNAPSACK_PRO_CI_NODE_INDEX=MY_INDEX \\\nKNAPSACK_PRO_CI_NODE_TOTAL=MY_TOTAL \\\nKNAPSACK_PRO_BRANCH=MY_BRANCH \\\nKNAPSACK_PRO_COMMIT_HASH=MY_COMMIT \\\nKNAPSACK_PRO_CI_NODE_BUILD_ID=MY_BUILD_ID \\\nbundle exec rake "knapsack_pro:rspec[--seed MY_SEED]"\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_CI_NODE_BUILD_ID")," must be the same as the CI build you are trying to reproduce (if it helps, take a look at what Knapsack Pro uses as ",(0,n.kt)("inlineCode",{parentName:"p"},"node_build_id")," for your ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KnapsackPro/knapsack_pro-ruby/tree/master/lib/knapsack_pro/config/ci"},"CI provider"),")."),(0,n.kt)("p",null,"You can also run the same subset of tests without Knapsack Pro: in the logs, find the command that Knapsack Pro used to invoke the test runner:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'rspec  --default-path spec "spec/models/user_spec.rb" "spec/models/comment_spec.rb"\n')),(0,n.kt)("h3",{id:"queue-mode"},"Queue Mode"),(0,n.kt)("p",null,"To reproduce what Knapsack Pro executed on a specific CI node, check out the same branch and run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC=MY_TOKEN \\\nKNAPSACK_PRO_CI_NODE_INDEX=MY_INDEX \\\nKNAPSACK_PRO_CI_NODE_TOTAL=MY_TOTAL \\\nKNAPSACK_PRO_BRANCH=MY_BRANCH \\\nKNAPSACK_PRO_COMMIT_HASH=MY_COMMIT \\\nKNAPSACK_PRO_CI_NODE_BUILD_ID=MY_BUILD_ID \\\nKNAPSACK_PRO_FIXED_QUEUE_SPLIT=true \\\nbundle exec rake "knapsack_pro:queue:rspec[--seed MY_SEED]"\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_CI_NODE_BUILD_ID")," must be the same as the CI build you are trying to reproduce (if it helps, take a look at what Knapsack Pro uses as ",(0,n.kt)("inlineCode",{parentName:"p"},"node_build_id")," for your ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KnapsackPro/knapsack_pro-ruby/tree/master/lib/knapsack_pro/config/ci"},"CI provider"),")."),(0,n.kt)("p",null,"You can also run the same subset of tests without Knapsack Pro: in the logs, find the command that Knapsack Pro used to invoke the test runner."),(0,n.kt)("p",null,"You will find multiple commands to reproduce each batch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'[knapsack_pro] To retry the last batch of tests fetched from the API Queue, please run the following command on your machine:\n[knapsack_pro] bundle exec rspec --format documentation --format RspecJunitFormatter --out tmp/rspec.xml --default-path spec --seed 24098 "spec/features/dashboard/billing/subscription_error_path_1_spec.rb[1:1:2:1:1:1]"\n')),(0,n.kt)("p",null,"Or a single command at the end to execute all the batches the CI node executed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'[knapsack_pro] To retry all the tests assigned to this CI node, please run the following command on your machine:\n[knapsack_pro] bundle exec rspec --format documentation --format RspecJunitFormatter --out tmp/rspec.xml --default-path spec --seed 24098 "spec/features/dashboard/billing/subscription_error_path_1_spec.rb[1:1:2:1:1:1]" "spec/features/dashboard/builds/build_distribution_for_build_spec.rb[1:1:1:10:2:1]" "spec/features/dashboard/builds/build_distribution_for_build_spec.rb[1:1:2:1]" "spec/features/dashboard/admin_statistics_spec.rb[1:6:1:1]" "spec/features/dashboard/identity_providers_spec.rb[1:6:1]" "spec/features/dashboard/onboarding_spec.rb[1:2:1:1:1]"\n')),(0,n.kt)("h2",{id:"knapsack-pro-hangs"},"Knapsack Pro hangs"),(0,n.kt)("p",null,"Some users reported frozen CI nodes with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Test runners producing too much output (e.g., Codeship and Queue Mode): reduce it with ",(0,n.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_log_level"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_LOG_LEVEL=warn")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Test runners producing no output: make sure to use a formatter (like RSpec's ",(0,n.kt)("a",{parentName:"p",href:"/ruby/rspec#formatters-rspec_junit_formatter-json"},(0,n.kt)("inlineCode",{parentName:"a"},"--format progress")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Timecop (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://docs.travis-ci.com/user/common-build-problems/#ruby-tests-frozen-and-cancelled-after-10-minute-log-silence"},"Travis"),"): ensure ",(0,n.kt)("inlineCode",{parentName:"p"},"Timecop.return")," is executed after all examples"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# spec/spec_helper.rb\n\nRSpec.configure do |c|\n  c.after(:all) do\n    Timecop.return\n  end\nend\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Chrome 83+ ",(0,n.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/chrome-83-deps-rems/"},"prevents downloads in sandboxed iframes"),": add an ",(0,n.kt)("inlineCode",{parentName:"p"},"allow-downloads")," keyword in the sandbox attribute list"))),(0,n.kt)("h2",{id:"knapsack-pro-does-not-work-on-a-forked-repository"},"Knapsack Pro does not work on a forked repository"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure your Knapsack Pro API token is set up as a secret in your CI (not hardcoded in the repository) to avoid leaking it.")),(0,n.kt)("p",null,"Since the token won't be available on forked CI builds, you can use a script to run:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Knapsack Pro in ",(0,n.kt)("a",{parentName:"li",href:"/overview/#fallback-mode"},"Fallback Mode"),"(static split by file names) on forked builds"),(0,n.kt)("li",{parentName:"ul"},"Knapsack Pro in ",(0,n.kt)("a",{parentName:"li",href:"/overview/#queue-mode-dynamic-split"},"Queue Mode")," or ",(0,n.kt)("a",{parentName:"li",href:"/overview/#regular-mode-static-split"},"Regular Mode")," on internal builds")),(0,n.kt)("p",null,"Create ",(0,n.kt)("inlineCode",{parentName:"p"},"bin/knapsack_pro_tests"),", make it executable ",(0,n.kt)("inlineCode",{parentName:"p"},"chmod u+x"),", and use it on CI to run your tests:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nif [ "$KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC" = "" ]; then\n  KNAPSACK_PRO_ENDPOINT=https://api-disabled-for-fork.knapsackpro.com \\\n  KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC=disabled-for-fork \\\n  KNAPSACK_PRO_MAX_REQUEST_RETRIES=0 \\\n  bundle exec rake knapsack_pro:queue:rspec\nelse\n  bundle exec rake knapsack_pro:queue:rspec\nfi\n')),(0,n.kt)("h2",{id:"error-commit_hash-parameter-is-required"},"Error ",(0,n.kt)("inlineCode",{parentName:"h2"},"commit_hash")," parameter is required"),(0,n.kt)("p",null,"Knapsack Pro takes ",(0,n.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_COMMIT_HASH")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_BRANCH")," from the CI environment (see ",(0,n.kt)("a",{parentName:"p",href:"/knapsack_pro-ruby/guide/"},"supported CIs"),"). If your CI is not supported you may see the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'ERROR -- : [knapsack_pro] {"errors"=>[{"commit_hash"=>["parameter is required"]}]}\n')),(0,n.kt)("p",null,"In such a case, you have two options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you have ",(0,n.kt)("inlineCode",{parentName:"li"},"git")," installed on CI, set ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_repository_adapter"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_REPOSITORY_ADAPTER=git"))," and ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_project_dir"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_PROJECT_DIR"))),(0,n.kt)("li",{parentName:"ul"},"Otherwise, set ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_commit_hash"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_COMMIT_HASH"))," and ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_branch"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_BRANCH"))," yourself")),(0,n.kt)("h2",{id:"loaderror-cannot-load-such-file----spec_helper"},(0,n.kt)("inlineCode",{parentName:"h2"},"LoadError: cannot load such file -- spec_helper")),(0,n.kt)("p",null,"If you are using a complex ",(0,n.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_PATTERN"),", Knapsack Pro could have problems finding the directory containing the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec_helper.rb")," file. Please set ",(0,n.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_test_dir-rspec"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_TEST_DIR")),"."),(0,n.kt)("h2",{id:"ci-builds-fail-with-testunit-but-all-tests-passed"},"CI builds fail with ",(0,n.kt)("inlineCode",{parentName:"h2"},"Test::Unit")," but all tests passed"),(0,n.kt)("p",null,"Please ensure you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"Test::Unit")," only and not loading minitest too."),(0,n.kt)("h2",{id:"tests-hitting-external-apis-fail"},"Tests hitting external APIs fail"),(0,n.kt)("p",null,"Most likely, you have global shared state between your tests."),(0,n.kt)("p",null,"For example, you may have a hook that deletes Stripe data while a parallel CI node is testing the Stripe integration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"before(:each) do\n  Stripe::Subscription.all.each { |subscription| subscription.delete }\n  Stripe::Customer.all.each { |customer| customer.delete }\nend\n")),(0,n.kt)("p",null,"You can fix it by either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using a gem like ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/vcr/vcr"},"VCR")," to record/replay your HTTP interactions"),(0,n.kt)("li",{parentName:"ul"},"Write your tests so that they can run in parallel (e.g., each test creates/deletes its own Stripe data)")),(0,n.kt)("h2",{id:"opensslsslsslerror"},(0,n.kt)("inlineCode",{parentName:"h2"},"OpenSSL::SSL::SSLError")),(0,n.kt)("p",null,"VCR, WebMock, or FakeWeb may trigger the following error when Knapsack Pro interacts with the Knapsack Pro API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OpenSSL::SSL::SSLError: SSL_connect returned=1 errno=0 state=error: tlsv1 alert internal error\n")),(0,n.kt)("p",null,"Make sure to follow the steps to ",(0,n.kt)("a",{parentName:"p",href:"/knapsack_pro-ruby/guide/"},"configure VCR/WebMock/FakeWeb"),"."),(0,n.kt)("h2",{id:"activerecordsubclassnotfound"},(0,n.kt)("inlineCode",{parentName:"h2"},"ActiveRecord::SubclassNotFound")),(0,n.kt)("p",null,"If files are changing during a tests run, you may get the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ActiveRecord::SubclassNotFound:\nInvalid single-table inheritance type: AuthenticationProviders::AnAuthenticationProvider is not a subclass of AuthenticationProvider\n")),(0,n.kt)("p",null,"Please make sure classes are loaded once in the test environment:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# environments/test.rb\n\nconfig.eager_load = true\n")),(0,n.kt)("h2",{id:"adding-parallel-ci-nodesjobs-makes-test-slower"},"Adding parallel CI nodes/jobs makes test slower"),(0,n.kt)("p",null,"You can verify if the tests are getting slower on your ",(0,n.kt)("a",{parentName:"p",href:"/overview/#dashboard"},"Knapsack Pro dashboard"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Execution times of your CI builds are increasing: ",(0,n.kt)("inlineCode",{parentName:"li"},"Recorded CI builds > Show (build) > Test Files > Total execution time")),(0,n.kt)("li",{parentName:"ul"},"Individual test stats are trending up: ",(0,n.kt)("inlineCode",{parentName:"li"},"Statistics of test files history > Stats (test file) > History of the test file (chart)"))),(0,n.kt)("p",null,"Here are the most common reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CI nodes share resources (CPU/RAM/IO)"),(0,n.kt)("li",{parentName:"ul"},"Tests are accessing the same resource (e.g., Stripe sandbox, database)"),(0,n.kt)("li",{parentName:"ul"},"Your CI gives you a limited pool of parallel CI nodes (and runs the rest serially)")),(0,n.kt)("h2",{id:"some-tests-were-skipped-in-regular-mode"},"Some tests were skipped in Regular Mode"),(0,n.kt)("p",null,"There is an unlikely scenario where some CI nodes may start in Fallback Mode but others in Regular Mode resulting in some tests being skipped. Our recommendations are either"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Switch to ",(0,n.kt)("a",{parentName:"li",href:"/overview/#queue-mode-dynamic-split"},"Queue Mode")," and enjoy faster CI builds too"),(0,n.kt)("li",{parentName:"ul"},"Disable Fallback mode with ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_fallback_mode_enabled"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FALLBACK_MODE_ENABLED=false"))),(0,n.kt)("li",{parentName:"ul"},"Increase the request attempts with ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_max_request_retries"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_MAX_REQUEST_RETRIES")))),(0,n.kt)("h2",{id:"factorybotfactorygirl-raises-in-queue-mode"},"FactoryBot/FactoryGirl raises in Queue Mode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KnapsackPro/knapsack_pro-ruby#knapsack-pro-binary"},(0,n.kt)("inlineCode",{parentName:"a"},"knapsack_pro")," binary"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bundle exec knapsack_pro queue:rspec\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Avoid implicit associations:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# \u26d4\ufe0f Bad\nFactoryBot.define do\n  factory :assignment do\n    task\n  end\nend\n\n# \u2705 Good\nFactoryBot.define do\n  factory :assignment do\n    association :task\n  end\nend\n")))),(0,n.kt)("h2",{id:"one-ci-node-run-the-test-suite-again-in-queue-mode"},"One CI node run the test suite again in Queue Mode"),(0,n.kt)("p",null,"Most likely, that CI node started when all the others finished running and initialized a new queue."),(0,n.kt)("p",null,"You have a couple of options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_ci_node_build_id"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_CI_NODE_BUILD_ID"))," is set (recommended)"),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_fixed_queue_split-queue-mode"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FIXED_QUEUE_SPLIT=true")))),(0,n.kt)("h2",{id:"rake-tasks-under-tests-are-run-more-than-once-in-queue-mode"},"Rake tasks under tests are run more than once in Queue Mode"),(0,n.kt)("p",null,"Make sure the Rake task is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KnapsackPro/rails-app-with-knapsack_pro/commit/9f068e900deb3554bd72633e8d61c1cc7f740306"},"loaded once"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"before do\n  Rake::Task[MY_TASK_NAME].clear if Rake::Task.task_defined?(MY_TASK_NAME)\n  Rake.application.rake_require(MY_TASK_FILENAME)\n  Rake::Task.define_task(:environment)\nend\n")),(0,n.kt)("h2",{id:"tests-distribution-is-unbalanced-in-queue-mode"},"Tests distribution is unbalanced in Queue Mode"),(0,n.kt)("p",null,"Please consider:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ruby/split-by-test-examples"},"Splitting by test examples")," if you have a bottleneck file that is packed with test examples"),(0,n.kt)("li",{parentName:"ul"},"If it's a retry, remember that ",(0,n.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_fixed_queue_split-queue-mode"},(0,n.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FIXED_QUEUE_SPLIT=true"))," uses a cached split")),(0,n.kt)("h2",{id:"related-faqs"},"Related FAQs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-knapsack_pro-hangs--freezes--is-stale-ie-for-codeship-in-queue-mode"},"Why ",(0,n.kt)("inlineCode",{parentName:"a"},"knapsack_pro")," hangs / freezes / is stale i.e. for Codeship in Queue Mode?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-knapsack_pro-freezes--hangs-my-ci-for-instance-travis"},"Why ",(0,n.kt)("inlineCode",{parentName:"a"},"knapsack_pro")," freezes / hangs my CI (for instance Travis)?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-knapsack_pro-hangs-freezes-is-stale-for-tests-in-chrome-disallow-downloads-in-sandboxed-iframes"},"Why ",(0,n.kt)("inlineCode",{parentName:"a"},"knapsack_pro")," hangs / freezes / is stale for tests in Chrome (disallow downloads in Sandboxed iframes)?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-when-i-use-queue-mode-for-rspec-then-my-rake-tasks-are-run-twice"},"Why when I use Queue Mode for RSpec then my rake tasks are run twice?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-make-knapsack_pro-works-for-forked-repositories-of-my-project"},"How to make ",(0,n.kt)("inlineCode",{parentName:"a"},"knapsack_pro")," works for forked repositories of my project?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-i-see-api-error-commit_hash-parameter-is-required"},"Why I see API error ",(0,n.kt)("inlineCode",{parentName:"a"},"commit_hash")," parameter is required?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-i-see-loaderror-cannot-load-such-file----spec_helper"},"Why I see LoadError: cannot load such file -- ",(0,n.kt)("inlineCode",{parentName:"a"},"spec_helper"),"?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-my-ci-build-fails-when-i-use-testunit-even-when-all-tests-passed"},"Why my CI build fails when I use Test::Unit even when all tests passed?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-tests-hitting-external-api-fail"},"Why tests hitting external API fail?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/failed-request-to-api-due-to-openssl-ssl-sslerror-ssl_connect-returned-1-errno-0-state-error-tlsv1-alert-internal-error"},"Failed request to API due to ",(0,n.kt)("inlineCode",{parentName:"a"},"OpenSSL::SSL::SSLError: SSL_connect returned=1 errno=0 state=error: tlsv1 alert internal error"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/when-ruby-rspec-tests-fail-with-error-like-activerecord-subclassnotfound-invalid-single-table-inheritance-type-authenticationproviders-anauthenticationprovider"},"When Ruby/RSpec tests fail with error like ActiveRecord::SubclassNotFound: Invalid single-table inheritance type: AuthenticationProviders::AnAuthenticationProvider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-my-tests-are-slower-when-i-run-more-parallel-ci-nodes-jobs"},"Why my tests are slower when I run more parallel CI nodes (jobs)?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-run-tests-for-particular-ci-node-in-your-development-environment"},"How to run tests for particular CI node in your development environment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-my-tests-are-executed-twice-in-queue-mode-why-ci-node-runs-whole-test-suite-again"},"Why my tests are executed twice in Queue Mode? Why CI node runs whole test suite again?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/if-one-of-the-parallel-ci-nodes-starts-work-very-late-after-other-parallel-ci-nodes-already-finished-work-then-tests-are-executed-twice-on-late-ci-node-in-knapsack-pro-queue-mode"},"If one of the parallel CI nodes starts work very late after other parallel CI nodes already finished work then tests are executed twice on late CI node in Knapsack Pro Queue Mode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-is-my-distribution-of-tests-unbalanced-in-the-queue-mode"},"Why is my distribution of tests unbalanced in the Queue Mode?"))))}d.isMDXComponent=!0}}]);