 # CVSSv3.0 Base Calculator (MS Word Add-in)
This add-in provides sidebar with CVSSv3.0 Calculator that shows and possibly insert your CVSSv3.0 value in your Word document. This is just a simple implementation of https://github.com/chandanbn/cvss. I'm just testing the technology, this project is nothing serious and might not work for you.

Here you can see how it looks like, just click the button and insert the numeric value where you want. It also inserts hidden HTML `<span>` with value of the vector so you know how you got the value. 

<img src="https://github.com/malacupa/cvssv3.0-base-calculator-addin/raw/master/imgs/screenshot.PNG" width="400" height="600" />


### Usage
See [this manual](https://docs.microsoft.com/en-us/office/dev/add-ins/publish/host-an-office-add-in-on-microsoft-azure) and follow these steps:

1. Copy `manifest-prod.xml` into shared folder as described in step `1)` of the manual
2. Follow steps `2)` and `7)` of the manual

### Devel
```
npm install
```

Generate your certificates into `certs/` folder somehow and run locally:
```
npm start
```
Then follow Microsoft's guide on sideloading add-ins for development.

### License
I don't care but there are dependencies:
Copyright (c) 2015-2016, Chandan B.N.
Copyright (c) 2015, FIRST.ORG, INC
