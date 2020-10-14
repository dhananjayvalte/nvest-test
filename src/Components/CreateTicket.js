import React, { useState, } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CustomStyles.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Backspace from '@material-ui/icons/Backspace';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Paper from '@material-ui/core/Paper';

function CreateTicket() {

    const [number, setNumber] = useState([]);
    const [numberarr, setnumberarr] = useState([])
    const addTicket = () => {
        if (numberarr.length <= 4) {
            if (number.length === 6) {
                let curNumber = number
                var isValid = numberarr.includes(curNumber);
                if (!isValid) {
                    let cuuarr = numberarr;
                    cuuarr.push(curNumber)
                    setnumberarr(cuuarr)
                    setNumber('')
                }
                else {
                    alert("Ticket is Already exist")
                }
            }
        }
        else {
            setNumber('')
        }
    }
    const generateNumber = () => {
        let generatedNumber = Math.floor(100000 + Math.random() * 900000);
        var isValid = numberarr.includes(generatedNumber);
        if (!isValid) {
            setTimeout(
                function () {
                    setNumber(generatedNumber.toString())
                }
                    .bind(this),
                100
            );
        }
        else {
            generateNumber();
        }
    }

    const buttnClcikHandler = (e) => {
        const clickNumber = e.target.value
        if (number.length <= 5) {
            setNumber(number + clickNumber)
        }
    }

    const deleteButton = () => {
        setNumber('')
    }
    const removeTicket = (e) => {
        let currarr = numberarr
        currarr.splice(e.target.id, 1);
        setnumberarr([])
        setTimeout(
            function () {
                setnumberarr(currarr)
            }
                .bind(this),
            1
        );
    }
    const backButton = () => {
        let newNumber = number.slice(0, -1)
        setNumber(newNumber)
    }


    const displayTickets = numberarr ? numberarr.map((number, index) => {
        return (
            <Col sm={2}>
                <Paper>
                    <Row>
                        <Col sm={10}>
                            <div ><lable className="ticketnumber" style={{ width: "80%" }}> Ticket #{index + 1}</lable></div>
                            <Button className="deleteButtton" variant="outline-light" onClick={removeTicket}><DeleteOutlinedIcon className="delIcon" id={index} value={index} color="secondary"></DeleteOutlinedIcon></Button>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col className="numberOuterDiv" sm={1}><div className="numberList">{number[0]}</div></Col>
                        <Col className="numberOuterDiv" sm={1} ><div className="numberList">{number[1]}</div></Col>
                        <Col className="numberOuterDiv" sm={1} ><div className="numberList">{number[2]}</div></Col>
                        <Col className="numberOuterDiv" sm={1} ><div className="numberList">{number[3]}</div></Col>
                        <Col className="numberOuterDiv" sm={1} ><div className="numberList">{number[4]}</div></Col>
                        <Col className="numberOuterDiv" sm={1}><div className="numberList">{number[5]}</div></Col>
                    </Row>
                </Paper>
                <br></br>
            </Col>
        )
    }) : null

    return (
        <Container fluid="md" >
            <br></br><br></br>
            <Row className="BoxShadow">
                <Col sm={1}></Col>
                <Col sm={5}>
                    <table style={{ backgroundColor: "white" }}>

                        <tbody>
                            <tr style={{ margin: "5px" }}>
                                <td colSpan="2"><input style={{ width: "100%", border: "none" }} value={number}></input></td>
                                <td><label className="InputLable">Enter 6 Digts</label></td>
                            </tr>
                            <tr >
                                <td className="tableTr"><Button name="1" value="1" onClick={buttnClcikHandler} variant="outline-light" className="myclass">1</Button></td>
                                <td className="tableTr"><Button name="2" value="2" onClick={buttnClcikHandler} variant="outline-light" className="myclass">2</Button></td>
                                <td className="tableTr"><Button name="3" value="3" onClick={buttnClcikHandler} variant="outline-light" className="myclass">3</Button></td>
                            </tr>
                            <tr>
                                <td className="tableTr"><Button name="4" value="4" onClick={buttnClcikHandler} variant="outline-light" className="myclass">4</Button></td>
                                <td className="tableTr"><Button name="5" value="5" onClick={buttnClcikHandler} variant="outline-light" className="myclass">5</Button></td>
                                <td className="tableTr"><Button name="6" value="6" onClick={buttnClcikHandler} variant="outline-light" className="myclass">6</Button></td>
                            </tr>
                            <tr>
                                <td className="tableTr"><Button name="7" value="7" onClick={buttnClcikHandler} variant="outline-light" className="myclass">7</Button></td>
                                <td className="tableTr"><Button name="8" value="8" onClick={buttnClcikHandler} variant="outline-light" className="myclass">8</Button></td>
                                <td className="tableTr"><Button name="9" value="9" onClick={buttnClcikHandler} variant="outline-light" className="myclass">9</Button></td>
                            </tr>
                            <tr>
                                <td className="tableTr"><Button variant="outline-light" onClick={backButton} className="myclass"><Backspace></Backspace></Button></td>
                                <td className="tableTr"><Button name="0" value="0" onClick={buttnClcikHandler} variant="outline-light" className="myclass">0</Button></td>
                                <td className="tableTr"><Button variant="outline-light" onClick={deleteButton} className="myclass"><DeleteOutlinedIcon color="secondary"></DeleteOutlinedIcon></Button></td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button onClick={addTicket} style={{ width: "100%", border: "none", textDecoration: "none" }}>
                                        <AddCircleOutlineIcon></AddCircleOutlineIcon> ADD TICKET
                                        </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col sm={1}></Col>
                <Col sm={4}>
                    <h6 style={{ color: "white", fontWeight: "bold" }}>Click the wheel to generate random tickets</h6>
                    <button onClick={generateNumber} style={{ backgroundColor: "blue", border: "none", textDecoration: "none" }}>
                        <LocationSearchingIcon className={"default-logo"}></LocationSearchingIcon>
                    </button>
                    <br></br>
                    <br></br><br></br>
                    <Paper><h6 style={{ color: "orange" }}>Ticket Number Range : 100000-999999</h6></Paper>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
                <Container style={{ minHeight: "200px" }} >
                    <Row><h4 style={{ textAlign: "left", color: "white" }}>Your Selected Tickets :</h4></Row>
                    <br></br>
                    <Row>
                        {displayTickets}
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}


export default CreateTicket
