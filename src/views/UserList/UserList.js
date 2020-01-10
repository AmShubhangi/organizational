import React from 'react';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import '../../assets/scss/index1.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import htmlToImage from 'html-to-image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import LoadingOverlay from 'react-loading-overlay';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.downloadImage = this.downloadImage.bind(this);
    this.printDocument = this.printDocument.bind(this);
    this.state = {
      isLoading: false,
      isimageLoading: false,
    }
    this.myRef = React.createRef();
    this.downloadImage = this.downloadImage.bind(this);
    this.getcolor = this.getcolor.bind(this);



    this.initechOrg = '';
    var arry = require('../../API/clientData.json');
    var map = {};
    for (var i = 0; i < arry.length; i++) {
      var obj = arry[i];
      obj.children = [];
      map[obj.Id.Value] = obj;
      try {
        var parent = obj.ParentLocationGroup.Id.Value; //Parent Id
        if (!map[parent]) {
          map[parent] = {
            children: []
          };
        } else {
          map[parent].children.push(obj);
        }
      } catch (error) {
        console.log('error');
      }
    }
    this.initechOrg = map[arry[0].Id.Value];
  }



  downloadImage() {
    window.scroll(0, 100);
    const input = document.getElementById('divToPrint');
    input.style.transform = 'scale(0.5)';
    this.setState({ isimageLoading: true });
    setTimeout(() => {
      htmlToImage.toPng(document.getElementById('divToPrint'), { quality: 0.55 })
        .then((dataUrl) => {
          var link = document.createElement('a');
          link.download = 'OG-Structure.png';
          link.href = dataUrl;
          link.click();
          this.setState({ isimageLoading: false })
        });
    }, 4000)
  }

  printDocument() {
    window.scrollTo(0, 0);
    const input = document.getElementById('divToPrint');
     input.style.transform = 'scale(0.5)';
    setTimeout(() => {
      this.setState({ isLoading: true })
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('l', 'mm', [75000, 1500], true);
          pdf.setTextColor(150);
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.text('John Doe', 10, 10);
          pdf.save("OG-Structure.pdf");
          this.setState({ isLoading: false });
        });
    }, 3000)
  }

  getcolor(event) {
    const div = document.getElementById(event.target.parentNode.id);
    div.style.backgroundColor = event.target.value;
    const bgColor = div.style.backgroundColor;
    this.setState({ color: bgColor });
  }

  componentDidMount() {
    var elem = document.getElementById(this.initechOrg.Name);
    window.scrollTo(elem.offsetLeft - 700, 0);
  }

  myZoomIn(e) {
    var zoomIn = document.getElementById('zoom');
    zoomIn.style.transform = 'scale(1.5)';
  }


  render() {
    const MyNodeComponent = ({ node }) => {
      return (
        <div className="initechNode" id={node.Name}>

          <div className="parent-node"
            id={node.Name} >
            <h4 className="parent-size">{node.Name}</h4>
            <input type="color" id="color-picker"
              className="btn btn-outline" onChange={this.getcolor}></input>
          </div>
          <div className="initechNode-info">
            {/* <p className="no-margin">Identifier:{node.Id.Value}</p> */}
            <p className="no-margin">Users:{node.Users}</p>
            <p className="no-margin">Admins:{node.Admins}</p>
            <p className="no-margin">Devices:{node.Devices}</p>
          </div>
        </div>
      );
    };
    return (
      <LoadingOverlay
        active={this.state.isimageLoading ? this.state.isimageLoading : this.state.isLoading}
        spinner
        text='Exporting File!'
      >
        <div className="root">
          <div className="content">
            <div className="full-width">
              <div className="donwload-group fixed-top">
                <h4 className="export">Export as :</h4>
                <ButtonGroup variant="text" id="download-button" color="primary" aria-label="text primary button group">

                  <Button onClick={this.printDocument} className="my-donwload" disabled={this.state.isLoading}>{this.state.isLoading ? <i class="fa fa-spinner fa-spin"></i> : <PictureAsPdfIcon />}&nbsp;{this.state.isLoading ? "Exporting PDF" : "PDF"}</Button>
                  <Button onClick={this.downloadImage} className="my-donwload" disabled={this.state.isimageLoading}>{this.state.isLoading ? <i class="fa fa-spinner fa-spin"></i> : <CloudDownloadIcon />}&nbsp;{this.state.isimageLoading ? "Exporting Image" : "Image"}</Button>
                </ButtonGroup>
                {/* {this.state.isLoading ? <Loading loading background="rgb(220, 232, 225)" loaderColor="#3498db" /> : ' '} */}
              </div>
              <div className="mt4">

                <div className="App" id="initechOrgChart">
                  <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <React.Fragment>
                        <div className="tools fixed-top">
                          <ButtonGroup variant="text" className="zoom-in-out" color="primary" aria-label="text primary button group">
                            <Button className="my-donwload" onClick={zoomIn}><ZoomInIcon /></Button>
                            <Button className="my-donwload" onClick={zoomOut}><ZoomOutIcon /></Button>
                            <Button className="my-donwload" onClick={resetTransform}><RotateLeftIcon /></Button>
                          </ButtonGroup>
                        </div>
                        <TransformComponent>
                          <div id="divToPrint" className="mt4" >
                            <div class="contain">
                              <input type="checkbox" id="zoomCheck" />
                              <label for="zoomCheck">
                                <p> <OrgChart tree={this.initechOrg} NodeComponent={MyNodeComponent} /></p></label></div>
                          </div>
                        </TransformComponent>
                      </React.Fragment>
                    )}
                  </TransformWrapper>
                </div>
              </div>


            </div>
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}
export default UserList;