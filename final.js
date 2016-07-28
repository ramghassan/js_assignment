var fs=require('fs');
fs.readFile("Table_1.3.csv","utf8",function (err,a) {
  if (err) throw err;
 var line=a.split("\n");
     var file_length=line.length-1;

     var Asia=["China","India","Indonesia","Japan","Saudi Arabia","Republic of Korea"],
         SouthAmerica=["Argentina","Brazil"],
         Africa=["South Africa"],
         NorthAmerica = ["Canada","Mexico","Usa"],
         Europe  = ["France","Germany","Turkey","United Kingdom","Russia"],
         Australia =["Australia"];

  var row=line[0].split(",");

  var index_country=row.indexOf("Country Name"),
      index_population2013=row.indexOf("Population (Millions) 2013"),
      index_gdp2013=row.indexOf("GDP Billions (USD) 2013"),
      index_powerParity2013=row.indexOf("Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013");
      var index_population=row.indexOf("Population (Millions) 2015");
      var index_gdp=row.indexOf("GDP Billions (USD) 2015");
      var b=[],Continent=[],population=[0,0,0,0,0,0],gdp=[0,0,0,0,0,0];
      var key1="Continent",key2="Total population",key3="Total GDP";
      var key4=row[index_country];
      var key5=row[index_population2013];
      var key6=row[index_gdp2013];
      var key7="Purchasing-Power-Parity";

  var b1,b=[],arry=[];
 function jconvert(n1,n2,n3){
    // var b=[];
  for(i=1;i<file_length;i++)
  {
    var  n=line[i].split(",");
    if((n[index_country]!=="World")&&(n[index_country]!=="European Union"))
{
          cn={};
          cn[key4]=n[index_country];
          cn[n2]=n[n3];
          b.push(cn);
}

  }
  b.sort(function(x,y) {
    return parseFloat(y[n2]) - parseFloat(x[n2]);
});
console.log(b);
b1=JSON.stringify(b);
return b1;
};
var h=jconvert(key4,key5,index_population2013);
h1= jconvert(key4,key6,index_gdp2013);
h2=jconvert(key4,key7,index_powerParity2013);
//writing to json file
fs.writeFile('j1.json',h ,'utf8', function (err) {
  if (err) throw err;
});
  fs.writeFile('j2.json', h1,'utf8', function (err) {
    if (err) throw err;
  });
    fs.writeFile('j3.json',h2,'utf8', function (err) {
      if (err) throw err;
    });

//Continent calculation
for(i=0;i<file_length;i++)
{
  n=line[i].split(",");
  if(Asia.indexOf(n[index_country])>-1)
  {
    Continent[0]="Aisa";
    population[0]=population[0]+parseFloat(n[index_population]);
    gdp[0]=gdp[0]+parseFloat(n[index_gdp]);
  }
  if(SouthAmerica.indexOf(n[index_country])>-1)
  {
    sum(1,"SouthAmerica",n[index_population],n[index_gdp]);

  }
  if(Africa.indexOf(n[index_country])>-1)
  {
  sum(2,"Africa",n[index_population],n[index_gdp]);
  }
  if(Europe.indexOf(n[index_country])>-1)
  {
    sum(3,"Europe",n[index_population],n[index_gdp]);
  }
  if(Australia.indexOf(n[index_country])>-1)
  {
    sum(4,"Australia",n[index_population],n[index_gdp]);
  }
  if(NorthAmerica.indexOf(n[index_country])>-1)
  {
    sum(5,"NorthAmerica",n[index_population],n[index_gdp]);
  }
}

function sum(par1,par2,par3,par4)
{
  Continent[par1]=par2;
  population[par1]=population[par1]+parseFloat(par3);
  gdp[par1]=gdp[par1]+parseFloat(par4);
};

for(i=0;i<6;i++)
{
  c={};
  c[key1]=Continent[i];
  c[key2]=population[i];
  c[key3]=gdp[i];
arry.push(c);
}

console.log(arry);
ary=JSON.stringify(arry);
fs.writeFile('j4.json',ary ,'utf8', function (err) {
  if (err) throw err;
});






  });
