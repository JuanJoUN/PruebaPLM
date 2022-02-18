function validateFile(){
    let file = document.getElementById('file');
    let select = document.getElementById('DI_type').value;

    let size = (file.files[0].size)/1000000;
    if(size > 5){
        return false;
    }
    if(select == "0"){
        return false;
    }
}
