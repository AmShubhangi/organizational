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
import loader from '../../assets/images/25.gif';
import Loading from 'react-fullscreen-loading';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.printDocument = this.printDocument.bind(this);

    this.state = {
      isLoading: false,
      isimageLoading: false
    }
    this.downloadImage = this.downloadImage.bind(this)
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
    this.setState({ isimageLoading: true });
    htmlToImage.toPng(document.getElementById('divToPrint'), { quality: 0.55 })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'OG-Structure.png';
        link.href = dataUrl;
        link.click();
        this.setState({ isimageLoading: false })
      });
  }

  printDocument() {
    this.setState({ isLoading: true })
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('l', 'mm', [25000, 1500]);
        pdf.setTextColor(150);
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.text('John Doe', 10, 10);
        pdf.save("OG-Structure.pdf");
        this.setState({ isLoading: false })
      });
  }
  render() {
    const MyNodeComponent = ({ node }) => {
      return (
        <div className="initechNode" >
          <div className="parent-node">
            <h4 className="parent-size">{node.Name}</h4>
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
      <div className="root">
        <div className="content">
          <div className="full-width">
            <div className="donwload-group">
              <ButtonGroup variant="text" id="download-button" color="primary" aria-label="text primary button group">
                <Button onClick={this.printDocument} className="my-donwload" disabled={this.state.isLoading}>{this.state.isLoading ? <i class="fa fa-spinner fa-spin"></i> : <PictureAsPdfIcon />}&nbsp;{this.state.isLoading ? "Genreating PDF" : "Export PDF"}</Button>

                <Button onClick={this.downloadImage} className="my-donwload" disabled={this.state.isimageLoading}>{this.state.isLoading ? <i class="fa fa-spinner fa-spin"></i> : <CloudDownloadIcon />}&nbsp;{this.state.isimageLoading ? "Genreating Image" : "Get Image"}</Button>
              </ButtonGroup>
              {this.state.isLoading ? <Loading loading background="rgb(220, 232, 225)" loaderColor="#3498db" /> : ' '}
              {this.state.isimageLoading ? <Loading loading background="rgb(220, 232, 225)" loaderColor="#3498db" /> : ' '}
            </div>
            <div className="mt4">
              <div className="App" id="initechOrgChart">
                <TransformWrapper>
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <React.Fragment>
                      <div className="tools">
                        <ButtonGroup variant="text" className="zoom-in-out" color="primary" aria-label="text primary button group">
                          <Button onClick={zoomIn}><ZoomInIcon /></Button>
                          <Button onClick={zoomOut}><ZoomOutIcon /></Button>
                          <Button onClick={resetTransform}><RotateLeftIcon /></Button>
                        </ButtonGroup>
                      </div>
                      <TransformComponent>
                        <div id="divToPrint" className="mt4">
                          <OrgChart tree={this.initechOrg} NodeComponent={MyNodeComponent} />
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
    );
  }
}
export default UserList;
