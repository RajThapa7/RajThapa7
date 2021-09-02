//diplay day adn time
let d=new Date();
let day=d.getDay();
let hour=d.getHours();
let minute=d.getMinutes();
let second=d.getSeconds();
let days=['sun','mon','tue','wed','thu','fri','sat'];
console.log(`Today is:`+days[day]);

    let ampm=(hour>=12)?"PM":"AM";
    let newhour;
    if(hour>12){
        newhour=hour-12;
    }
    else{
        newhour=hour;
    }

console.log(`current time is `+newhour+ampm+':'+minute+':'+second);

//displaying date
let d=new Date("2015-03-10");
 date=d.getDate();
 month=d.getMonth();
 year=d.getFullYear();
 if(date<10){
     date="0"+date;
 }
 if(month<=9){
     month="0"+(month+1);
 }
 console.log(`${date}/${month}/${year}`);

 //area of triangle
 
 let a=5;
 let b=6;
 let c=7;
 let s=(a+b+c)/2;
 let area=s*(s-a)*(s-b)*(s-c);
 let totalarea=Math.sqrt(area);
 console.log(totalarea.toFixed(2));

//Leap yr or not
 let year=" 1600";
 if(year%4==0){
     if(year%100==0){
         if(year%400==0){
             console.log("Leap Year");
         }
         else{
             console.log("Not a leap year");
         }
     }
     else{
     console.log("Not a leap year");

 }
}
 else{
     console.log("Not a leap year");
 }
//days until christmas
 let d = new Date('2021-12-25');
 let d1 = new Date();
 let current_christmas=d1.getTime();
 let upcoming_chrtistmas=d.getTime();
let days_remain=Math.ceil((upcoming_chrtistmas-current_christmas)/86400000);
console.log(days_remain);

//finding which is jan1 is sunday in which year
console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`)
 for(let year=2015;year<=2050;year++){
     let d=new Date(year,0,1);
     if(d.getDay()==0){
        console.log(`|1st january is sunday in ${year}|`);
     }
 }
 console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`)


 //sum of two no and triple if nos are same
 let a=20;
let b=20;
let sum=(a==b)? a+b+a : a+b;
console.log(sum);


//removing a character at specified position
function char_remove(str,position){
    firstpart=str.slice(0,position);
    secondpart=str.slice(position+1,str.length);
    return firstpart+secondpart;
}
console.log(char_remove("python ka thon",5));

//changing1st andlast character
function first_last(str){
    first=str.match(/^\w/)[0];//accesing1stelement
    last=str.match(/\w$/)[0];//accessinglastelement
    newstr=str.replace(/^\w/,last);
    newstr1=newstr.replace(/\w$/,first);
    return newstr1;

}
string="python";
console.log(first_last(string));


//adding last 3 string to fst and lst of str
function last3string(str){
    last3 =str.substr(-3,3);
    return `${last3}${str}${last3}`;

}
let string="dola";
console.log(last3string(string));

//if script word is in index 5 it removes
let string="";
let newstr =string.slice(string.length-6,string.length);
if(string.length<=6){
    console.log(string);
}else if(newstr=='script'){
           let newstr= string.replace(/(script)$/,'');
            console.log(newstr);
}
        else{
            console.log(string)
        }
        
        //No cursing
        let nocursing=/(fuck)/g
        let nocursing2=/(nigga)/g
        let nocursing3=/(bitch)/g
        let str='i want to say fuck you adn youre the biggest bitch motherfucker i have ever seen  in my fucking life fuckk you nigga';
        let cleanword=str.replace(nocursing,"****");
       let cleanword1=cleanword.replace(nocursing2,"****");
        let cleanword2=cleanword1.replace(nocursing3,"****");
    
        console.log(cleanword2);

        /*First letter uppercase or not
let str="Hala";
let RegEx=/^[A-Z]/;
if(RegEx.test(str)){
    console.log("Uppercase first letter");
}
else{
    console.log('No UpperCase');
}
*/


/* credit card
let cardNum="1222 1254 1245 1245";
let patt=/[0-9]{4}[" "]?/;
if(patt.test(cardNum)){
    console.log("It is a Credit Card");

}
else{
    console.log("It is not a Credit Card");
}
*/

 /*mail validation
 let mail='jyangoraj123@gmail.com';
 let pat=/^([a-zA-Z0-9])+\_?\.?[a-zA-Z0-9]+\@[a-zA-Z]+[\.]([a-z]{2,3}$)/;
 function mailCheck(address){
     if(pat.test(address)===true){
     console.log("Valid email address")}
     else{
         console.log("Invalid email address");
     }
 };
mailCheck(mail);*/
/* check date
let text="Today is 12/12/2020,isn't it?";
let patt=/([0-9]{4}|[0-2]{1}[1-9]{1}|[3]{1}[0-2]{1})[\/?\-?]+([0]{1}[1-9]{1}|[1]{1}[0-2]{1}|[0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-2]{1})\/?\-?([0-9]{4}|[0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-2]{1})/;
if(patt.test(text)){
console.log("yes")}
else{
    console.log("No");
}*/

/*trim() function using regexp
let regexp=/\w+[' ']*\w+([' ']*\w*)*/;
/*function trem(str){
        result=regexp.exec(str);
        return result[0];
}
let word="  hello 123 Sworld   "
        console.log(trem(word));*/


        /*IP CHECKING PATTERN
        let ip="192.168.1.1";
        let ip2="255.255.256.100"
        let patt=/^([0-1]{1}[0-9]{2}||[2]{1}[0-5]{2}|[0-9]{1}|[0-9]{2})\.([0-1]{1}[0-9]{2}||[2]{1}[0-5]{2}|[0-9]{1}|[0-9]{2})\.([0-1]{1}[0-9]{2}||[2]{1}[0-5]{2}|[0-9]{1}|[0-9]{2})\.([0-1]{1}[0-9]{2}|[2]{1}[0-5]{2}|[0-9]{1}|[0-9]{2})$/;
        function ipCheck(IP){
            if(patt.test(IP)){
                return "Your IP is valid";
            }
            else{
                return "Your IP is invalid";
            }
        };
        console.log(ipCheck(ip));
        console.log(ipCheck(ip2));
        */


/*vowel letter counting
        let word="aeiou";
        function vowelCount(str){
            let vowel=str.replace(/[^aeiou]?/gi,"");
             let arr=vowel.split("");
            let no=arr.length;
            return no;
        }
        console.log(vowelCount(word));*/
/*Alternative to above
        let word="aeiou";

    let result= word.match(/[aeiou]/gi).length;
    console.log(result);*/

  
    //checking range of no between 50-99 (3 num)
    function checkRangeBetween50to99(a,b,c){
        if((a>=50&&a<=99)&&(b>=50&&b<=99)&&(c>=50&&c<=99))
        {
       console.log(`${a},${b},${c} all are in range`);
        }
        else if((a>=50&&a<=99)&&(b>=50&&b<=99)){
           console.log(`${a} and ${b} are within range`);
       }
       else if((b>=50&&b<=99)&&(c>=50&&c<=99)){
           console.log(`${b}and ${c} are within range`);
       }
       else if((a>=50&&a<=99)&&(c>=50&&c<=99)){
           console.log(`${a} and ${c} are within range`);
       }
       else if((a>=50&&a<=99)){
           console.log(`${a} is within range`);
       }
       else if((b>=50&&b<=99)){
           console.log(`${b} is within range`);
       }
       else if((c>=50&&c<=99)){
           console.log(`${c} is within range`);
       }
       }
       checkRangeBetween50to99(40,55,46);

       //largets betn 3 number
       function largest(a,b,c){
        if(a>b && a>c){
            console.log(`${a} is the largest`);
        }
        else if(b>a && b>c){
            console.log(`${b} is the largest`);
        }
        else if(c>b && c>a){
            console.log(`${c} is the largest`);
        }
        else if(a==b && b==c){
            console.log("all are equal");
        }
        else{
            if(a==b){
                if(a>c){
    
                console.log(`${a} and ${b} are same and largest`);
            }
            else{
                console.log(`${c} is the largest`)
            }
        }
            else if(b==c){
                if(b>a){
                console.log(`${b} and ${c} are same and largest`);
            }
            else{
                console.log(`${a} is the largest`)
            }
        }
            else if(a==c){
                if(a>b){
                console.log(`${a} and ${c} are same and largest`)
            }
            else{
                console.log(`${b} is the largest`)
            }
    
        }
    }
    }
    largest(100,10000,1000);

    //checking if string conatains character at 2-4 th position
    function check_char(str1, char)
 {
  ctr = 0;
  for (let i = 0; i < str1.length; i++)
  {
    if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
    {
        ctr=1;
              break;
    }
   }
   if (ctr==1) return `"${str1}" contains "${char}"`;
   return `"${str1}" doesnot contains "${char}"`;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "s"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "o"));
console.log(check_char("JavaScript", "S"));

//checking last digit same or not
function lastDigitchecker(a,b,c){
    a=a.toString();
    b=b.toString();
    c=c.toString();

    patt=/\d$/gm;
    lastDigitOfa=a.match(patt);
    lastDigitOfb=b.match(patt);
    lastDigitOfc=c.match(patt);
    if(lastDigitOfa[0]==lastDigitOfb[0] && lastDigitOfb[0]==lastDigitOfc[0]){
        console.log("true");
    }
    else{
        console.log("false");
    }


}
lastDigitchecker(51,41,311);

//reversing a string
function reverseString(string){
    reversedSrting=string.split("").reverse().join("");
    console.log(reversedSrting);
}
reverseString("raj thapa");

//capitalizing first word

function capitalizeFirstWord(string){
    //creating each word as an array elelment
    let arrayofString=string.split(' ');
    //Accessing first element of each word and capitalizing it
    for(let i=0;i<arrayofString.length;i++){
        firstword=arrayofString[i][0].toUpperCase();
        remainingWord=arrayofString[i].slice(1);
        arrayofString[i]=firstword+remainingWord;
    }
    console.log(arrayofString.join(" "))
    }
let str="hello mero dosto"
     capitalizeFirstWord(str);

     //prime number between two interval(exclusive border)
let a=1;
let b=100;
for(let i=a+1;i<b;i++){
    for(let div=2;div<i;div++){
        if(i%div==0){
            break;
        }
        if(i%div!==0){
            let prime=i;
            console.log(prime);
            break;
        }
    }
}

//Checking if Amstrong number or not
let a=370;
function checknoofdigit(num){
    let digits=0;
    while(num!=0){
        num=Math.floor(num/10);
        digits++
    }
    return digits;
}



function checkingifAmstrong(num){
    let total=0;
    while(num!=0){
        
        rem=num%10;
        num=Math.floor(num/10);
        total+=Math.pow(rem,checknoofdigit(a));
        
    }
    if(total==a){
        console.log('yes');
    }
    else{
        console.log('no');
    }
    
}
checkingifAmstrong(a);

//converting seconds into hour minnutes and seconds
let ts=3;
let hour=Math.trunc(ts/3600);
let minute=Math.trunc((ts-hour*3600)/60);
let second=(ts-hour*3600-minute*60);
console.log(hour,minute,second);