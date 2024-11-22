let i,j,k,l;
for(i=1;i<=5;i++){
    for(k=1;k<=5-i;k++){
       // document.write("&nbsp;&nbsp");
       star+= "&nbsp;&nbsp";
    }
    for(j=1;j<=i;j++){
    //document.write("*");
    star+="*";
    }
    for(l=2;l<=i;l++){
       // document.write("*");
       star+="*";
    }
    //document.write("<br>");
    star+="<br>";
}
document.write(star);
