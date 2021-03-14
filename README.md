# Setup ReSharper Command Line Tools

[![GitHub release](https://img.shields.io/github/release/kasperhesthaven/setup-resharper-clt.svg)](https://gitHub.com/kasperhesthaven/setup-resharper-clt/releases/)
[![GitHub license](https://img.shields.io/github/license/kasperhesthaven/setup-resharper-clt.svg)](https://github.com/kasperhesthaven/setup-resharper-clt/blob/master/LICENSE)
[![Build & pack](https://github.com/kasperhesthaven/setup-resharper-clt/actions/workflows/build.yml/badge.svg)](https://github.com/kasperhesthaven/setup-resharper-clt/actions/workflows/build.yml)
[![Test CLT](https://github.com/kasperhesthaven/setup-resharper-clt/actions/workflows/test_clt.yml/badge.svg)](https://github.com/kasperhesthaven/setup-resharper-clt/actions/workflows/test_clt.yml)

This action downloads the [ReSharper command line tools](https://www.jetbrains.com/resharper/download/#section=commandline) by version number and adds it to your path, enabling you to:

-   Use ReSharper CleanupCode to instantly eliminate code style violations in a project or solution and ensure a uniform code base.
-   Use ReSharper dupFinder to find duplicates in C# and Visual Basic .NET code
-   Use ReSharper InspectCode to apply ReSharper inspections across your codebase & see results in XML.

## Usage

See [action.yml](action.yml)

Basic workflow:

```yaml
steps:
    - name: Checkout repository
      uses: actions/checkout@v2.3.4

    - name: Install ReSharper CLT
      uses: kasperhesthaven/setup-resharper-clt@v1.1.0
      with:
          resharper-version: "2020.3.3" # CLT Version to use, defaults to 2020.3.3

    - name: Clean up code
      run: cleanupcode.sh YourSolution.sln

    - name: Find duplicate code
      run: dupFinder.sh <source> -o=<PathToOutputFile>

    - name: Analyze code
      run: InspectCode.sh YourSolution.sln -o=<PathToOutputFile>
```

## License

This project is licensed under the Unlicense license - see the [LICENSE.txt](LICENSE.txt) file for details.
