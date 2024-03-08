const p = getElementById('password');
const b = getElementById('checker');
const t = getElementById('target');

class Check{
    
    constructor(password){
        this.password = password;
       
    }
    
    pChecker(){
        
        var pass = this.password;
        var result = this.password.replace(/\d+/g, "");
        var result2 = result.replace(/[A-Z]+/g,"");
        var result3 = result2.replace(/[a-z]+/g,"");
       
        if(pass.length<8 || pass.length>16)
        {
            return console.log("Incorrect Password Length");   
        }
        else{
           if(result==this.password)
            {
                console.log(pass);
                console.log(result);
                return console.log("Password Missing Number");
            } 
            else{
           
                if((/[A-Z]/).test(pass)==false)
            {

                console.log(pass);
                console.log(result);
                return console.log("Password Missing Uppercase Letter");
                
            }
        
            if((/[a-z]/).test(pass)==false)
            {
                
                return console.log("Password Missing Lowercase Letter");
            }
            else{
                
            if(result3==0)
            {
                
                return console.log("Password Missing Special Character");
                
            }
            
            else {
                
                return console.log("Password Accepted");}
            
        
        
            }        
        }
            }      
        }


      
}  


b.addEventListener('submit', fun1);

function fun1(){
const ch = new Check(p.value);
t.innerHTML = ch.pChecker(); 
}