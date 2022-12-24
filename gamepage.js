player1_name=localStorage.getItem("name1");
player2_name=localStorage.getItem("name2");
player1_score=0;
player2_score=0;
document.getElementById("p1name").innerHTML=player1_name+"-";
document.getElementById("p2name").innerHTML=player2_name+"-";
document.getElementById("p1score").innerHTML=player1_score;
document.getElementById("p2score").innerHTML=player2_score;
document.getElementById("qturn").innerHTML="Question Turn -"+player1_name;
document.getElementById("aturn").innerHTML="Answer Turn -"+player2_name;
function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    charAt1=word.charAt(1);
    length_divide=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide);
    length_minus=word.length-1;
    charAt3=word.charAt(length_minus);
    console.log(charAt1);
    console.log(charAt2);
    console.log(charAt3);
    remove1=word.replace(charAt1,"_");
    remove2=remove1.replace(charAt2,"_");
    remove3=remove2.replace(charAt3,"_");
    console.log(remove3)
    question_word="<h4 id='word_display'>Q. "+remove3+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check'>";
    check_button="<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
qt="p1"
at="p2"
function check()
{
    store=document.getElementById("input_check").value;
    store1=store.toLowerCase()
    if(store1==word){
        if(at=="p1"){
            player1_score=player1_score+1;
            document.getElementById("p1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("p2score").innerHTML=player2_score;
        }
    }
    if(qt=="p1"){
        qt="p2";
        document.getElementById("qturn").innerHTML="Question Turn -"+player2_name;
    }
    else{
        qt="p1";
        document.getElementById("qturn").innerHTML="Question Turn -"+player1_name;
    }
    if(at=="p1"){
        at="p2";
        document.getElementById("aturn").innerHTML="Answer Turn -"+player2_name;
    }
    else{
        at="p1";
        document.getElementById("aturn").innerHTML="Answer Turn -"+player1_name;
    }
    document.getElementById("output").innerHTML=" "
}