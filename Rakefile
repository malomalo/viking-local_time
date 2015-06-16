require 'rubygems'
require 'bundler/setup'
require 'sprockets'

Dir.glob('tasks/*.rake').each { |r| import r }

# -- The Asset Pipeline -----------------------------------------------------
def asset_pipeline
  return @asset_pipeline if defined?(@asset_pipeline)

  @asset_pipeline = Sprockets::Environment.new
  @asset_pipeline.append_path 'lib'
  @asset_pipeline.append_path 'test'
  @asset_pipeline.append_path 'test/dependencies'
  @asset_pipeline.config = Sprockets::Utils.hash_reassoc(@asset_pipeline.config, :bundle_reducers, 'application/javascript') do |reducers|
    reducers.delete(:data) # Remove the SafetyColons
    reducers
  end
  
  @asset_pipeline
end

# -- Helper for checking the existence of an executable ---------------------
def check(exec, name, url, install=nil)
  return unless `which #{exec}`.empty?
  
  puts "#{name} not found. (#{url})"
  puts "\nInstall via:\n#{install}" if install

  exit(1)
end
