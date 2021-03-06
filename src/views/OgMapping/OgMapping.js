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
import { MapInteractionCSS } from 'react-map-interaction';
import watermark from '../../assets/images/home-logo.661d8116.png';
import "react-sweet-progress/lib/style.css";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

class OgMapping extends React.Component {
  constructor(props) {
    super(props);
    this.getImage = this.getImage.bind(this);
    this.printDocument = this.printDocument.bind(this);
    this.getcolor = this.getcolor.bind(this);
    this.GotoParent = this.GotoParent.bind(this);

    this.state = {
      isLoading: false,//PDF Loader.
      isImageLoading: false,//Image Loader.
      bgcolor: '#287cfa',//ColorPicker.
      watermarkVisible: false,//Watermark.
      Positionx: window.pageXOffset,
      PositionY: window.pageYOffset
    }


    //Converting json data format into library format of Diagram.
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
        console.log('');
      }
    }
    this.initechOrg = map[arry[0].Id.Value];
  }//

  //Download as Image.
  getImage() {
    this.setState({ isImageLoading: true });
    this.setState({ Positionx: window.pageXOffset });
    this.setState({ PositionY: window.pageYOffset });

    this.setState({ watermarkVisible: true });
    htmlToImage.toPng(document.getElementById('divToPrint'), { quality: 0.55 })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'OG-Structure.png';
        link.href = dataUrl;
        link.click();
        this.setState({ isImageLoading: false });
        this.setState({ watermarkVisible: false });
        window.scrollTo(this.state.Positionx, this.state.PositionY);
      });
  }


  //Download as PDF.
  printDocument() {
    this.setState({ Positionx: window.pageXOffset });
    this.setState({ PositionY: window.pageYOffset });
    this.setState({ isLoading: true });

    window.scrollTo(0, 0);
    const input = document.getElementById('divToPrint');
    setTimeout(() => {
      this.setState({ watermarkVisible: true });
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png', { quality: 0.55 });
          const pdf = new jsPDF('l', 'mm', [750000, 1500], true);
          pdf.setTextColor(150);
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save("OG-Structure.pdf");
          this.setState({ watermarkVisible: false });
          this.setState({ isLoading: false });
          window.scrollTo(this.state.Positionx, this.state.PositionY);
        });
    }, 3000)
  }

  //Get Color from Colorpicker and set it into state.
  getcolor(event) {
    this.setState({ bgcolor: event.target.value });
  }

  componentDidMount() {
    this.GotoParent();//When Component render its scroll to the parent node.
  }

  //Scroll to the parent node.
  GotoParent() {
    var elem = document.getElementById(this.initechOrg.Name);
    window.scrollTo(elem.offsetLeft - window.innerWidth / 2, 0);
    const c = document.getElementById('org');
    c.parentNode.style.transform = "translate(0px,0px) scale(1)";
  }

  render() {
    const MyNodeComponent = ({ node }) => {
      return (
        <div className="initechNode" id={node.Name}>
          <div className="parent-node"
            id={node.Name} style={{ backgroundColor: this.state.bgcolor }}>
            <h4 className="parent-size">{node.Name}</h4>
          </div>
          <div className="initechNode-info">
            <p className="no-margin">Identifier:{node.Id.Value}</p>
            <p className="no-margin">Users:{node.Users}</p>
            <p className="no-margin">Admins:{node.Admins}</p>
            <p className="no-margin">Devices:{node.Devices}</p>
          </div>
        </div>
      );
    };
    return (

      <LoadingOverlay
        active={this.state.isImageLoading ? this.state.isImageLoading : this.state.isLoading}
        spinner
        text='Exporting File!'
        className="loader-overlay"
      >{/*Loader while downloading image and PDF.*/}

        <div className="root">
          <div className="content">
            <div className="full-width">
              <div className="donwload-group fixed-top">
                <h4 className="export">Export as :</h4>
                <ButtonGroup variant="text" id="download-button" color="primary" aria-label="text primary button group">
                  <Button onClick={this.printDocument} className="my-donwload" disabled={this.state.isLoading}>{this.state.isLoading ? <i class="fa fa-spinner fa-spin"></i> : <PictureAsPdfIcon />}&nbsp;{this.state.isLoading ? "Exporting PDF" : "PDF"}</Button>

                  <Button onClick={this.getImage} className="my-donwload" disabled={this.state.isImageLoading}>{this.state.isImageLoading ? <i class="fa fa-spinner fa-spin"></i> : <CloudDownloadIcon />}&nbsp;{this.state.isImageLoading ? "Exporting Image" : "Image"}</Button>
                </ButtonGroup>
              </div>
              <div className="mt4">
                <div className="App" id="initechOrgChart">
                  <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <React.Fragment>
                        <div className="tools fixed-top">
                          <ButtonGroup variant="text" className="zoom-in-out" color="primary" aria-label="text primary button group">
                            <Button className="my-donwload" onClick={zoomIn}><ZoomInIcon /></Button>
                            <Button className="my-donwload" onClick={zoomOut} ><ZoomOutIcon /></Button>
                            <Button className="my-donwload" onClick={resetTransform} onClickCapture={this.GotoParent}><RotateLeftIcon /></Button>
                            <Button>
                              <input type="color" id="color-picker"
                                className="btn btn-outline" onChange={this.getcolor}></input>
                            </Button>
                          </ButtonGroup>
                        </div>
                        <TransformComponent>
                          <div id="divToPrint" className="mt4">
                            {this.state.watermarkVisible === true ? <div className="watermark">
                              <p className="copy">By</p><img src={watermark} alt="watermark" className="watermark1" />
                            </div> : ''}
                            <MapInteractionCSS>
                              <div id="org">
                                <OrgChart tree={this.initechOrg} NodeComponent={MyNodeComponent} />
                              </div>
                            </MapInteractionCSS>
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
      </LoadingOverlay >
    );
  }
}
export default OgMapping;