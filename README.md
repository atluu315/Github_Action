# Github_Action
# Katalon Studio action test

This action to run KS test and with your test cases source codes. 

## Inputs

Input your katalon studio version number, katalon command, and apiKey

**Required** the katalon studio version number, katalon commands , apikey and test cases files 


This is the example to using github action <br>
Please change to the latest github action version and your Input. <br>

Setup API Key using Secret name :  API_KEY

Katalon Github Action Marketplace link :  https://github.com/marketplace/actions/katalon-studio



## Example usage
```yaml
jobs:
  build:
    runs-on: windows-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2
    - name: Install packages
      run: npm install --save katalon-studio/katalon-agent#v1.4.0
    # Runs Katalon Studio Action
    - name: Runs Katalon Studio Action Step
      uses: ./ #Uses an action in the root directory
      with:
          version: '7.5.5'
          projectPath: $GITHUB_WORKSPACE/simple_project/simple_project
          args: '-noSplash -retry=0 -testSuiteCollectionPath="Test Suites/Run All Test Suites" -apiKey= ${{ secrets.API_KEY }} --config -proxy.auth.option=NO_PROXY -proxy.system.option=NO_PROXY'
```
