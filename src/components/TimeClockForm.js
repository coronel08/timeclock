import React,{useState} from 'react'
import {
    Col,
    Row,
    Button,
    Form,
    Label,
    Input,
    FormGroup
} from 'reactstrap';


function TimeClockForm() {
    const [time, setTime] = useState({currentTime: 0})

    let handleTime = (e) => {
        e.preventDefault();
        setTime(() => {
            return {
                currentTime: new Date().toLocaleString()
            }
        })
        console.log(time)
    }


    return (
        <div>
            <Form>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="nameID">Name</Label>
                            <Input type="text" name="name" id="nameID"></Input>
                        </FormGroup>

                        <FormGroup className="m-5">
                            <p>Select the type of service</p>
                            <Label for="productID">Product</Label>
                            <Input type="radio" name="product" id="productID" value="1" ></Input>
                            <Label for="productID2">Product2</Label>
                            <Input type="radio" name="product" id="productID2" value="2"></Input>
                            <Label for="productID3">Product3</Label>
                            <Input type="radio" name="product" id="productID3" value="3"></Input>
                        </FormGroup>

                        <FormGroup>
                            <p> 
                                <Button className="m-3" onClick={handleTime}>Clock In</Button>
                                {time.currentTime}
                            </p>
                        </FormGroup>
                    </Col>

                    {/* <Button variant="primary" type="submit">Submit</Button> */}
                </Row>
            </Form>
        </div>
    )
}

export default TimeClockForm
