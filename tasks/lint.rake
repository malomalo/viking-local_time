desc "run JavaScriptLint on the source"
task :lint do
  check 'eslint', 'JavaScript Lint', 'npm install eslint --global'
  
  Dir.glob(File.join(File.expand_path("../../", __FILE__), 'lib', '**', '*.js')).each do |file|
    print '%-75s ' % file
    system("eslint -c .eslintrc #{file}")
  end
end
