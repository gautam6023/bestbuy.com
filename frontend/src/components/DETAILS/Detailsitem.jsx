// import styled from 'styled-components'







const Detailsitem = ({ item }) => {
    const { title, rate, imgUrl, top, save, price} = item;


return (
<>
    <div>
        <div>
            <p>{title}</p>
        </div>
        <div>
            <p>{rate}</p>
        </div>
    </div>

<div>
    <hr/>
</div>



<div className="Conta">

<div>
    <img src={imgUrl} alt="" />
</div>



<div>


<div>
    <div>
        <p>{top}</p>
    </div>
    <div>
        <p>{save}</p>
    </div>
    <div>
        <p>{price}</p>
    </div>
</div>


<div>
    <button>Add TO CArt</button>
</div>
<div>
    <button>Pick Up at Store</button>
</div>

</div>
</div>



    </>

)




}



export default Detailsitem;