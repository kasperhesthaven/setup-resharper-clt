# setup-resharper-clt

This action downloads [ReSharper CLT](https://www.jetbrains.com/resharper/download/#section=commandline) by version number and adds it to your path, enabling you to:

-   Use CleanupCode to instantly eliminate code style violations in a project or solution and ensure a uniform code base.
-   Use dupFinder to find duplicates in C# and Visual Basic .NET code
-   Use InspectCode to apply ReSharper inspections across your codebase & see results in XML.

# Usage

See [action.yml](action.yml)

Basic:

```yaml
steps:
    - name: Checkout
      uses: actions/checkout@v2.3.1

    - name: Install ReSharper CLT
    - uses: kasperhesthaven/setup-resharper-clt@v1.0.0
      with:
          resharper-version: "2020.1" # CLT Version to use, defaults to 2020.1

    - name: Clean up code
    - run: cleanupcode.sh YourSolution.sln # .exe for windows

    - name: Find duplicate code
    - run: dupFinder.sh <source> -o=<PathToOutputFile> # .exe for windows

    - name: Analyze code
    - run: InspectCode.sh YourSolution.sln -o=<PathToOutputFile> # .exe for windows
```
