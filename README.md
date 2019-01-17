 # CVSSv3.0 Base Calculator (MS Word Add-in)
This add-in provides sidebar with CVSSv3.0 Calculator that shows and possibly insert your CVSSv3.0 value in your Word document. This is just a simple implementation of https://github.com/chandanbn/cvss.

Here you can see how it looks like, just click the button and insert the numeric value where you want. It also inserts hidden HTML `<span>` with value of the vector so you know how you got the value. 
<img src="https://raw.githubusercontent.com/malacupa/cvssv3.0-base-calculator-addin/master/imgs/screenshot.png" width="400" height="600" />



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