"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={pagination_next:null,pagination_prev:null},s="Use Knapsack Pro with RSpec",l={unversionedId:"ruby/rspec",id:"ruby/rspec",title:"Use Knapsack Pro with RSpec",description:"--fail-fast",source:"@site/docs/ruby/rspec.md",sourceDirName:"ruby",slug:"/ruby/rspec",permalink:"/ruby/rspec",draft:!1,editUrl:"https://github.com/KnapsackPro/docs.knapsackpro.com/tree/main/docusaurus/docs/ruby/rspec.md",tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null}},i={},p=[{value:"<code>--fail-fast</code>",id:"--fail-fast",level:2},{value:"Run a subset of tests",id:"run-a-subset-of-tests",level:2},{value:"Parallelize test examples (instead of files)",id:"parallelize-test-examples-instead-of-files",level:2},{value:"Formatters (<code>rspec_junit_formatter</code>, <code>json</code>)",id:"formatters-rspec_junit_formatter-json",level:2},{value:"Regular Mode",id:"regular-mode",level:3},{value:"Queue Mode",id:"queue-mode",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Why do I see the summary of failed/pending tests multiple times in Queue Mode?",id:"why-do-i-see-the-summary-of-failedpending-tests-multiple-times-in-queue-mode",level:3},{value:"Why is <code>.rspec</code> ignored in Queue Mode?",id:"why-is-rspec-ignored-in-queue-mode",level:3},{value:"Why are some of my test files not executed?",id:"why-are-some-of-my-test-files-not-executed",level:3},{value:"How do I fix <code>LoadError: cannot load such file -- MY_RUBY_GEM</code>?",id:"how-do-i-fix-loaderror-cannot-load-such-file----my_ruby_gem",level:3},{value:"How do I fix <code>Don&#39;t know how to build task &#39;knapsack_pro:rspec_test_example_detector&#39;</code>?",id:"how-do-i-fix-dont-know-how-to-build-task-knapsack_prorspec_test_example_detector",level:3},{value:"How do I fix <code>Could not generate JSON report for RSpec. Rake task failed when running RACK_ENV=test RAILS_ENV=test bundle exec rake knapsack_pro:rspec_test_example_detector</code>?",id:"how-do-i-fix-could-not-generate-json-report-for-rspec-rake-task-failed-when-running-rack_envtest-rails_envtest-bundle-exec-rake-knapsack_prorspec_test_example_detector",level:3},{value:"Related FAQs",id:"related-faqs",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-knapsack-pro-with-rspec"},"Use Knapsack Pro with RSpec"),(0,r.kt)("h2",{id:"--fail-fast"},(0,r.kt)("inlineCode",{parentName:"h2"},"--fail-fast")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/ruby/reference/#command-line-arguments"},"Rake argument syntax")," to fail fast:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Stop when 1 test failed\nbundle exec rake "knapsack_pro:queue:rspec[--fail-fast]"\n\n# Stop when 3 tests failed\nbundle exec rake "knapsack_pro:queue:rspec[--fail-fast 3]"\n')),(0,r.kt)("h2",{id:"run-a-subset-of-tests"},"Run a subset of tests"),(0,r.kt)("p",null,"To run a subset of your test suite you have a couple of options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KNAPSACK_PRO_TEST_FILE_*")," ",(0,r.kt)("a",{parentName:"li",href:"/ruby/reference/"},"environment variables")," (recommended)"),(0,r.kt)("li",{parentName:"ul"},"RSpec's ",(0,r.kt)("inlineCode",{parentName:"li"},"--tag MY_TAG"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--tag ~MY_TAG"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--tag type:feature"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"--tag ~type:feature"))),(0,r.kt)("p",null,"If you are seeking faster performance on your CI, you may want to read ",(0,r.kt)("a",{parentName:"p",href:"#parallelize-test-examples-instead-of-files"},"Parallelize test examples (instead of files)")),(0,r.kt)("h2",{id:"parallelize-test-examples-instead-of-files"},"Parallelize test examples (instead of files)"),(0,r.kt)("p",null,"You can set ",(0,r.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_rspec_split_by_test_examples-rspec"},(0,r.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_RSPEC_SPLIT_BY_TEST_EXAMPLES"))," to parallelize tests at the ",(0,r.kt)("inlineCode",{parentName:"p"},"it"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"specify")," level across CI nodes."),(0,r.kt)("p",null,"As an example, imagine you have two test files in your suite:"),(0,r.kt)("div",{style:{overflowX:"auto"}},(0,r.kt)("table",{style:{width:"100%",display:"table"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{whiteSpace:"nowrap"}},"Test file path (2 files)"),(0,r.kt)("th",{style:{width:"250px",whiteSpace:"nowrap"}},"Time execution"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",{style:{backgroundColor:"#fcf8e3"}},(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/controllers/api/v3/books_controller_spec.rb"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"6 minutes and 30 seconds")),(0,r.kt)("tr",{style:{backgroundColor:"#fcf8e3"}},(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/features/books_spec.rb"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"2 minutes and 30 seconds"))))),(0,r.kt)("p",null,"On your ",(0,r.kt)("a",{parentName:"p",href:"/overview/#dashboard"},"Knapsack Pro dashboard"),", you can see the yellow highlights because of the bottleneck."),(0,r.kt)("p",null,"By enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_RSPEC_SPLIT_BY_TEST_EXAMPLES"),", the bottleneck disappears because Knapsack Pro can distribute tests so that each CI node is balanced (e.g., 4.5 minutes + 4.5 minutes):"),(0,r.kt)("div",{style:{overflowX:"auto"}},(0,r.kt)("table",{style:{width:"100%",display:"table"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{whiteSpace:"nowrap"}},"Test file path (5 files)"),(0,r.kt)("th",{style:{whiteSpace:"nowrap"}},"Time execution"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/controllers/api/v3/books_controller_spec.rb[1:1]"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"2 minutes")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/controllers/api/v3/books_controller_spec.rb[1:2]"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"2 minutes")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/controllers/api/v3/books_controller_spec.rb[1:3]"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"2 minutes")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/controllers/api/v3/books_controller_spec.rb[1:4]"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"30 seconds")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/features/books_spec.rb[1:1]"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"1 minute and 15 seconds")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{whiteSpace:"nowrap"}},"spec/features/books_spec.rb[1:2]"),(0,r.kt)("td",{style:{width:"250px",whiteSpace:"nowrap"}},"1 minute and 15 seconds"))))),(0,r.kt)("p",null,"To avoid memory overhead, Knapsack Pro only splits bottleneck files by test examples and parallelizes the rest of your test suite by file."),(0,r.kt)("p",null,"We recommend running at least 2 CI builds after you enable this feature or change the number of CI nodes to allow the Knapsack Pro API to learn about your test suite."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Does not support ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag"))),(0,r.kt)("p",null,"Due to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rspec/rspec-core/issues/2522"},"RSpec internals"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," might be ignored when used together with ",(0,r.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_RSPEC_SPLIT_BY_TEST_EXAMPLES"),". But you can use the ",(0,r.kt)("a",{parentName:"p",href:"/ruby/reference"},"environment variables")," to filter the test files to run."),(0,r.kt)("h2",{id:"formatters-rspec_junit_formatter-json"},"Formatters (",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/sj26/rspec_junit_formatter"},(0,r.kt)("inlineCode",{parentName:"a"},"rspec_junit_formatter")),", ",(0,r.kt)("a",{parentName:"h2",href:"https://relishapp.com/rspec/rspec-core/v/3-12/docs/formatters/json-formatter"},(0,r.kt)("inlineCode",{parentName:"a"},"json")),")"),(0,r.kt)("h3",{id:"regular-mode"},"Regular Mode"),(0,r.kt)("p",null,"Format stdout with the ",(0,r.kt)("inlineCode",{parentName:"p"},"documentation")," formatter and file output with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RspecJunitFormatter")," formatter (you can use any RSpec supported formatter):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bundle exec rake "knapsack_pro:rspec[--format documentation --format RspecJunitFormatter --out tmp/rspec.xml]"\n')),(0,r.kt)("h3",{id:"queue-mode"},"Queue Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Refer to your CI docs for `$MY_CI_NODE_INDEX`\nexport KNAPSACK_PRO_CI_NODE_INDEX=$MY_CI_NODE_INDEX\n\nbundle exec rake "knapsack_pro:queue:rspec[--format documentation --format RspecJunitFormatter --out tmp/rspec_$KNAPSACK_PRO_CI_NODE_INDEX.xml]"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# spec_helper.rb or rails_helper.rb\n\n# `TMP_REPORT` must be the same path as `--out`\n# `TMP_REPORT` must be a full path (no `~`)\nTMP_REPORT = \"tmp/tmp_rspec_#{ENV['KNAPSACK_PRO_CI_NODE_INDEX']}.xml\"\nFINAL_REPORT = \"tmp/final_rspec_#{ENV['KNAPSACK_PRO_CI_NODE_INDEX']}.xml\"\n\nKnapsackPro::Hooks::Queue.after_subset_queue do |queue_id, subset_queue_id|\n  if File.exist?(TMP_REPORT)\n    FileUtils.mv(TMP_REPORT, FINAL_REPORT)\n  end\nend\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FINAL_REPORT")," will contain all the tests run on the CI node (not just the last subset). For more information, you can read this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KnapsackPro/knapsack_pro-ruby/issues/40"},"Github issue"),"."),(0,r.kt)("p",null,"If your CI nodes write to the same disk, you need to append the CI node index to the solution presented above to avoid conflicts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"TMP_REPORT = \"tmp/tmp_rspec_#{ENV['KNAPSACK_PRO_CI_NODE_INDEX']}.xml\"\nFINAL_REPORT = \"tmp/final_rspec_#{ENV['KNAPSACK_PRO_CI_NODE_INDEX']}.xml\"\n")),(0,r.kt)("p",null,"This applies also if you are running parallel test processes on each CI node (see our page on to integrate Knapsack Pro with ",(0,r.kt)("a",{parentName:"p",href:"/ruby/parallel_tests"},(0,r.kt)("inlineCode",{parentName:"a"},"parallel_tests"))," for an example)."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"why-do-i-see-the-summary-of-failedpending-tests-multiple-times-in-queue-mode"},"Why do I see the summary of failed/pending tests multiple times in Queue Mode?"),(0,r.kt)("p",null,"It may happen if you use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a custom RSpec formatter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"knapsack_pro")," < 0.33.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KnapsackPro/knapsack_pro-ruby#knapsack_pro_modify_default_rspec_formatters-hide-duplicated-summary-of-pending-and-failed-tests"},(0,r.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_MODIFY_DEFAULT_RSPEC_FORMATTERS=false")))),(0,r.kt)("p",null,"This is due to the fact that Knapsack Pro in Queue Mode ",(0,r.kt)("a",{parentName:"p",href:"/overview/#queue-mode-dynamic-split"},"runs tests in batches"),", and RSpec accumulates failures/pending tests for all batches."),(0,r.kt)("h3",{id:"why-is-rspec-ignored-in-queue-mode"},"Why is ",(0,r.kt)("inlineCode",{parentName:"h3"},".rspec")," ignored in Queue Mode?"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".rspec")," file is ignored in Queue Mode because ",(0,r.kt)("inlineCode",{parentName:"p"},"knapsack_pro")," needs to pass arguments explicitly to ",(0,r.kt)("inlineCode",{parentName:"p"},"RSpec::Core::Runner"),". You can inline them with the ",(0,r.kt)("a",{parentName:"p",href:"/ruby/reference/#command-line-arguments"},"Rake argument syntax")," instead."),(0,r.kt)("h3",{id:"why-are-some-of-my-test-files-not-executed"},"Why are some of my test files not executed?"),(0,r.kt)("p",null,"First, check if the RSpec output mentions any filtering like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Run options: include {:focus=>true, :ids=>{"./spec/example_spec.rb"=>["1:1:2"]}}\n')),(0,r.kt)("p",null,"Second, you may want to grep the codebase (including ",(0,r.kt)("inlineCode",{parentName:"p"},".rspec"),") for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tag MY_TAG"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-t MY_TAG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fit"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fdescribe"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"fcontext")),(0,r.kt)("li",{parentName:"ul"},"test examples or groups tagged with ",(0,r.kt)("inlineCode",{parentName:"li"},":focus"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"run_all_when_everything_filtered"))),(0,r.kt)("p",null,"Make sure to use ",(0,r.kt)("a",{parentName:"p",href:"https://relishapp.com/rspec/rspec-core/v/3-12/docs/filtering/filter-run-when-matching"},(0,r.kt)("inlineCode",{parentName:"a"},"filter_run_when_matching"))," instead of the deprecated ",(0,r.kt)("a",{parentName:"p",href:"https://relishapp.com/rspec/rspec-core/v/2-3/docs/filtering/run-all-when-everything-filtered"},(0,r.kt)("inlineCode",{parentName:"a"},"run_all_when_everything_filtered")),". The latter may cause skipping some of your tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# \u26d4\ufe0f Bad\nRSpec.configure do |c|\n  c.filter_run :focus => true\n  c.run_all_when_everything_filtered = true\nend\n\n# \u2705 Good\nRSpec.configure do |c|\n  c.filter_run_when_matching :focus\nend\n\n# \ud83e\udd18 FYeah\nCI=true # Refer to your CI docs\n\nRSpec.configure do |c|\n  unless ENV['CI']\n    c.filter_run_when_matching :focus\n  end\nend\n")),(0,r.kt)("h3",{id:"how-do-i-fix-loaderror-cannot-load-such-file----my_ruby_gem"},"How do I fix ",(0,r.kt)("inlineCode",{parentName:"h3"},"LoadError: cannot load such file -- MY_RUBY_GEM"),"?"),(0,r.kt)("p",null,"Probably, you load ",(0,r.kt)("inlineCode",{parentName:"p"},"MY_RUBY_GEM")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Rakefile")," so when ",(0,r.kt)("inlineCode",{parentName:"p"},"knapsack_pro")," runs a rake task it fails. To fix the problem either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Don't load ",(0,r.kt)("inlineCode",{parentName:"li"},"MY_RUBY_GEM")," when ",(0,r.kt)("inlineCode",{parentName:"li"},"RAILS_ENV=test")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"MY_RUBY_GEM")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},":test")," group in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Gemfile"))),(0,r.kt)("h3",{id:"how-do-i-fix-dont-know-how-to-build-task-knapsack_prorspec_test_example_detector"},"How do I fix ",(0,r.kt)("inlineCode",{parentName:"h3"},"Don't know how to build task 'knapsack_pro:rspec_test_example_detector'"),"?"),(0,r.kt)("p",null,"Try to remove the default prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle exec")," used by ",(0,r.kt)("inlineCode",{parentName:"p"},"knapsack_pro")," by setting ",(0,r.kt)("inlineCode",{parentName:"p"},'KNAPSACK_PRO_RSPEC_TEST_EXAMPLE_DETECTOR_PREFIX=""'),"."),(0,r.kt)("h3",{id:"how-do-i-fix-could-not-generate-json-report-for-rspec-rake-task-failed-when-running-rack_envtest-rails_envtest-bundle-exec-rake-knapsack_prorspec_test_example_detector"},"How do I fix ",(0,r.kt)("inlineCode",{parentName:"h3"},"Could not generate JSON report for RSpec. Rake task failed when running RACK_ENV=test RAILS_ENV=test bundle exec rake knapsack_pro:rspec_test_example_detector"),"?"),(0,r.kt)("p",null,"Most likely, RSpec is causing your CI machine to freeze due to a lack of resources: you could try to use fewer parallel nodes, or add more CPU/RAM. There is nothing we can do on our side, sorry!"),(0,r.kt)("p",null,"Check the terminal output for the actionable error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"E, [2021-03-30T17:33:12.199274 #103] ERROR -- : [knapsack_pro] ---------- START of actionable error message --------------------------------------------------\nE, [2021-03-30T17:33:12.199329 #103] ERROR -- : [knapsack_pro] There was a problem while generating test examples for the slow test files using the RSpec dry-run flag. To reproduce the error triggered by the RSpec, please try to run below command (this way, you can find out what is causing the error):\nE, [2021-03-30T17:33:12.199348 #103] ERROR -- : [knapsack_pro] bundle exec rspec --format json --dry-run --out .knapsack_pro/test_case_detectors/rspec/rspec_dry_run_json_report_node_0.json --default-path spec spec/models/user_spec.rb spec/features/articles_spec.rb\nE, [2021-03-30T17:33:12.199368 #103] ERROR -- : [knapsack_pro] ---------- END of actionable error message --------------------------------------------------\n")),(0,r.kt)("h2",{id:"related-faqs"},"Related FAQs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-use-junit-formatter"},"How to use junit formatter?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-use-json-formatter-for-rspec"},"How to use JSON formatter for RSpec?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-split-slow-rspec-test-files-by-test-examples-by-individual-it#warning-dont-use-deprecated-rspec-run_all_when_everything_filtered-option"},"How to split slow RSpec test files by test examples (by individual it)?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-run-only-a-specific-set-of-test-files-in-rspec"},"How to run only a specific set of test files in RSpec (using tags or test file pattern)?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-split-tests-based-on-test-level-instead-of-test-file-level"},"How to split tests based on test level instead of test file level?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-run-only-rspec-feature-tests-or-non-feature-tests"},"How to run only RSpec feature tests or non feature tests?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/rspec-is-not-running-some-tests"},"RSpec is not running some tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-stop-running-tests-on-the-first-failed-test-fail-fast-tests-in-rspec"},"How to stop running tests on the first failed test (fail fast tests in RSpec)?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-when-i-use-queue-mode-for-rspec-then-rspec-config-is-ignored"},"Why when I use Queue Mode for RSpec then .rspec config is ignored?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-when-i-use-queue-mode-for-rspec-and-test-fails-then-i-see-multiple-times-info-about-failed-test-in-rspec-result"},"Why when I use Queue Mode for RSpec and test fails then I see multiple times info about failed test in RSpec result?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/why-when-i-use-queue-mode-for-rspec-then-i-see-multiple-times-the-same-pending-tests"},"Why when I use Queue Mode for RSpec then I see multiple times the same pending tests?"))))}c.isMDXComponent=!0}}]);