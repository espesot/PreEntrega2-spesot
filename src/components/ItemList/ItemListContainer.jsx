import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <FlexWrapper>
                <Card
                    img="https://www.nauticalnewstoday.com/wp-content/uploads/2016/10/aletas-de-buceo-atomic-acuatics.jpg"
                    title="Item-1"
                    detail="Lorem Ipsum"
                    price="500" />
                <Card
                    img="https://i.blogs.es/1752fb/71kteeyxatl._ac_sl1500_/450_1000.webp"
                    title="Item-2"
                    detail="Lorem Ipsum"
                    price="600" />
                <Card
                    img="https://tubuceas.com/wp-content/uploads/elementor/thumbs/aletas-scubapro-p7ty5ycw6bgxudn2w1syoubwf0wp80e8cz03acx39c.jpg"
                    title="Item-3"
                    detail="Lorem Ipsum"
                    price="700" />
            </FlexWrapper>
        </div>
    );
}

export default ItemListContainer;