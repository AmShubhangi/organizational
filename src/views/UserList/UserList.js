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
import PinDropSharpIcon from '@material-ui/icons/PinDropSharp';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

class UserList extends React.Component {
  constructor() {
    super();
    var data = require('../../API/data.json');
    this.state = {
      initechOrg: data,
    }
  }

  downloadImage() {
    htmlToImage.toJpeg(document.getElementById('divToPrint'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      });
  }

  render() {
    const MyNodeComponent = ({ node }) => {
      return (
        <div className="initechNode" >
          <div className="parent-node">
            {/* <img src="../icons/location.png" /> */}
            <PinDropSharpIcon />
            <h4>{node.Name}</h4>
          </div>
          <div className="initechNode-info">
            <p>Identifier:{node.Id.Value}</p>
            <p>Users:{node.Users}</p>
            <p>Admins:{node.Admins}</p>
            <p>Devices:{node.Devices}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="root">
        <div className="content">
          <div id="divToPrint" className="mt4">
            <div className="donwload-group">
              <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button onClick={this.printDocument}><PictureAsPdfIcon />&nbsp;Export PDF</Button>
                <Button onClick={this.downloadImage}><CloudDownloadIcon />&nbsp;Get Image</Button>
              </ButtonGroup>
            </div>
            <div className="App" id="initechOrgChart">
              <TransformWrapper
              >
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
                      <OrgChart tree={this.state.initechOrg} NodeComponent={MyNodeComponent} />
                    </TransformComponent>
                  </React.Fragment>
                )}
              </TransformWrapper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
