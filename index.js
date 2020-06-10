const {execute} = require('katalon-cli/src/katalon-studio');
const core = require('@actions/core');

const user_version = core.getInput('version');
const user_location = core.getInput('location');
const user_projectPath = core.getInput('projectPath');
const user_args = core.getInput('args');

try
{
    execute(
        user_version,
        user_location,
        user_projectPath,
        user_args,
        '',
        '',
        {
            info: function()
            {
                console.log(arguments);
            },
            debug: function()
            {
                console.log(arguments);
            }
        }
    )
} catch (error)
{
    core.setFailed(error.message);
}
