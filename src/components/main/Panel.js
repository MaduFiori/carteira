export default function Panel(props){

    var caminho = "./img/credit-card-preview-840x400.jpg";

    if (props.data.cardname == "") {
        caminho = "./img/credit-card-preview-840x400.jpg";
    }else if (props.data.cardname == "Mastercard") {
        caminho = "./img/mooba.jpeg";
    }else{
        caminho = "./img/meliuz4-min.jpeg";
    }

    return (
        <div className="panel">
            <img src={caminho}/>
            {console.log(caminho)}
            
        </div>
    );
}