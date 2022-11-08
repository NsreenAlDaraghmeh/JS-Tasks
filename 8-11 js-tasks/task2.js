
function myFunction() {
    let x = document.getElementById('country').value;
if (x=="Norway"){
    document.getElementsByTagName("img")[0].src="nor.webp";
}
else if
    (x=="jordan"){
        document.getElementsByTagName("img")[0].src="jor.jpg";
    }
    else if
        (x=="syria"){
            document.getElementsByTagName("img")[0].src="sy.png";

        }
    else if
    (x=="saudi arabia"){
        document.getElementsByTagName("img")[0].src="sa.webp";

    }
    else
    {
        document.getElementsByTagName("img")[0].src="ey.webp";

    }
}
