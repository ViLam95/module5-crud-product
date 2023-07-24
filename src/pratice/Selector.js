import {useState, useEffect} from "react";


function Selector() {
    let [selected, setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState("");
    let [image, setImage] = useState("")

    const choice = e => {
        setSelected(e.target.value)
    };

    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelected("Lâm");
                setImage("./hotboy1.jpeg")
                break;
            case "1":
                setValueSelected("Minh");
                setImage("./boy2.jpg")
                break;
            case "2":
                setValueSelected("Hiếu");
                setImage("./boy3.jpg")
                break;
            case "3":
                setValueSelected("Thái");
                setImage("./boy1.jpg")
                break;
            default:
        }
    }, [selected]);

    return (
        <div>
            Em chọn ai:
            <select onChange={e => {
            choice(e)}}
            >
                <option value="0">Lâm</option>
                <option value="1">Minh</option>
                <option value="2">Hiếu</option>
                <option value="3">Thái</option>
            </select>
            <h2>Em đã chọn anh: {valueSelected} làm bạn trai.</h2>
            {image && <img style={{width:500, height: 600}} src= {image} alt={valueSelected}/>}
        </div>
    )
}

export default Selector;