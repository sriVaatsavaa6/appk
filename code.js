hideElement("label1");

setScreen("MainScreen");
setTimeout(function() {
  setScreen("screen2");
}, 4000);

onEvent("button2", "click", function( ) {
  if (getText("Email")!=""&&getText("Password")!="") {
    createRecord("Users", {Email:getText("Email"), Password:getText("Password")}, function(record) {
    
  });
  
  setScreen("LoginScreen");
  }
  
  
  
  
});
onEvent("button3", "click", function( ) {
  readRecords("Users", {Email:getText("email")}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("password")==records[i].Password) {
       setScreen("loadingscreen");
       setTimeout(function() {
         setScreen("screen4");
       }, 6000);
        
   
      }
      else
      {
        showElement("label1");
        
      }
      
      
    }
    setText("Userid",getText("email") );
    
    
    
    
  });
  
  
});

onEvent("button4", "click", function( ) {
  setScreen("ForgotScreen");
});


onEvent("button6", "click", function( ) {
 readRecords("Users", {Email:getText("forgotemail")}, function(records) {
    for (var i =0; i < records.length; i++) {
    
    updateRecord("Users", {id:records[i].id, Email:getText("forgotemail"), Password:getText("forgotpassword")}, function(record, success) {
        
      });
        
      
    }
    
    setScreen("LoginScreen");
    
  });
   
  
 
});

onEvent("button5", "click", function( ) {
  setScreen("Signupscreen");
  
});

onEvent("Logout", "click", function( ) {
  setScreen("LoginScreen");
  setText("email", " ");
   setText("password", " ");
  setText("Email", " ");
  setText("Password", " ");
  hideElement("label1");
  
});

onEvent("Delete", "click", function( ) {
  setScreen("LoginScreen");
  readRecords("Users", {Email:getText("Userid")}, function(records) {
    for (var i =0; i < records.length; i++) {
    
   deleteRecord("Users", {id:records[i].id}, function(success) {
     
   });
   
        
      
    }
    
    
    
  });
  setText("email", " ");
   setText("password", " ");
  setText("Email", " ");
  setText("Password", " ");
  setScreen("LoginScreen");
});
onEvent("button8", "click", function( ) {
  setScreen("LoginScreen");
});
onEvent("button7", "click", function( ) {
  setScreen("Teachlogin");
});

onEvent("Teachlogin", "click", function( ) {
  if (getText("Teachemail")== "teach@assess.com" &&getText("teachpassword")== "teach123") {
   setScreen("screen3");
   setTimeout(function() {
     setScreen("teacher");
   }, 6000);
  }
  
});




onEvent("send", "click", function( ) {
  createRecord("Question", {Question:(getText("question"))}, function(record) {
    
  });
});

onEvent("getquestion", "click", function( ) {
  readRecords("Question", {}, function(records) {
    for (var i =0; i < records.length; i++) {
    setText("getquestion", records[i].Question);
        
      
    
    }
  });
});


onEvent("submit", "click", function( ) {
  createRecord("Answers", {Name:getText("Studentname"), Answer:getText("answer"),Question:getText("getquestion")}, function(record) {
    
  });
  setText("getquestion", "Click Me To Get The Question");
  setText("Studentname", "Enter Your Name");
  setText("answer", "Write Your Answer Here");
  
});

onEvent("GetAnswer", "click", function( ) {
  readRecords("Answers", {}, function(records) {
    for (var i =0; i < records.length; i++) {
     setText("student",records[i].Name);
  setText("Answer", records[i].Answer);
     
     
    }
  });
});


onEvent("button12", "click", function( ) {
createRecord("Result", {Name:getText("student") , Score:getNumber("total"),}, function(record) {
    
  });
    
  });

var x=1;
onEvent("nextname", "click", function( ) {
  x=x+1;
  readRecords("Answers", {id:x}, function(records) {
    for (var i =0; i < records.length; i++) {
     setText("student",records[i].Name);
  setText("Answer", records[i].Answer);
     
   
    }
  });
});

onEvent("prevname", "click", function( ) {
  x=x-1;
  readRecords("Answers", {id:x}, function(records) {
    for (var i =0; i < records.length; i++) {
     setText("student",records[i].Name);
  setText("Answer", records[i].Answer);
     
   
    }
  });
});


onEvent("button10", "click", function( ) {
  setScreen("screen1");
 drawChartFromRecords("chart1", getText("charts"), "Result", ["Name", "Score"],{colors:[getText("dropdown3")]});
   
});
onEvent("button13", "click", function( ) {
  setScreen("Student");
});
onEvent("button14", "click", function( ) {
  setScreen("Student");
});
onEvent("button15", "click", function( ) {
  setScreen("screen4");
});


