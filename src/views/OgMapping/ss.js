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
import watermark from '../../assets/images/home-logo.661d8116.png'
import "react-sweet-progress/lib/style.css";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

class OgMapping extends React.Component {
  constructor(props) {
    super(props);
    this.downloadImage = this.downloadImage.bind(this);
    this.printDocument = this.printDocument.bind(this);
    this.state = {
      isLoading: false,
      isimageLoading: false,
      bgcolor: '#287cfa',
      watermarkVisible: false,
    }
    this.downloadImage = this.downloadImage.bind(this);
    this.getcolor = this.getcolor.bind(this);
    this.GotoParent = this.GotoParent.bind(this);

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
  }

  downloadImage() {
    window.scroll(0, 100);
    this.setState({ isimageLoading: true });
    this.setState({ watermarkVisible: true });
    setTimeout(() => {
      htmlToImage.toPng(document.getElementById('divToPrint'), { quality: 0.55 })
        .then((dataUrl) => {
          var link = document.createElement('a');
          link.download = 'OG-Structure.png';
          link.href = dataUrl;
          link.click();
          this.setState({ isimageLoading: false })
        });
    }, 10)
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    setTimeout(() => {
      this.setState({ isLoading: true })
      this.setState({ watermarkVisible: true });
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png', { quality: 0.55 });
          const pdf = new jsPDF('l', 'mm', [75000, 1500], true);
          pdf.setTextColor(150);
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save("OG-Structure.pdf");
          this.setState({ isLoading: false });
        });
    }, 2000)
  }

  generate() {
    (function (exports) {
      function urlsToAbsolute(nodeList) {
        if (!nodeList.length) {
          return [];
        }
        var attrName = 'href';
        if (nodeList[0].__proto__ === HTMLImageElement.prototype || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
          attrName = 'src';
        }
        nodeList = [].map.call(nodeList, function (el, i) {
          var attr = el.getAttribute(attrName);
          if (!attr) {
            return;
          }
          var absURL = /^(https?|data):/i.test(attr);
          if (absURL) {
            return el;
          } else {
            return el;
          }
        });
        return nodeList;
      }

      function screenshotPage() {
        urlsToAbsolute(document.images);
        urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));
        var screenshot = document.documentElement.cloneNode(true);
        var b = document.createElement('base');
        b.href = window.location.protocol;
        var head = screenshot.querySelector('head');
        head.insertBefore(b, head.firstChild);
        screenshot.style.pointerEvents = 'none';
        // screenshot.style.overflow = 'scroll';
        screenshot.style.webkitUserSelect = 'none';
        screenshot.style.mozUserSelect = 'none';
        screenshot.style.msUserSelect = 'none';
        screenshot.style.oUserSelect = 'none';
        screenshot.style.userSelect = 'none';
        // screenshot.dataset.scrollX = window.scrollX;
        // screenshot.dataset.scrollY = window.scrollY;
        var script = document.createElement('script');
        script.textContent = '(' + addOnPageLoad_.toString() + ')();';
        screenshot.querySelector('body').appendChild(script);
        var blob = new Blob([screenshot.outerHTML], {
          type: 'text/html'
        });
        return blob;
      }

      function addOnPageLoad_() {
        window.addEventListener('DOMContentLoaded', function (e) {
          // var scrollX = document.documentElement.dataset.scrollX || 0;
          // var scrollY = document.documentElement.dataset.scrollY || 0;
          // window.scrollTo(scrollX, scrollY);
        });
      }


      window.URL = window.URL || window.webkitURL;
      window.open(window.URL.createObjectURL(screenshotPage()));
      exports.screenshotPage = screenshotPage;
      // exports.generate = generate;
    })(window);
  }

  getcolor(event) {
    this.setState({ bgcolor: event.target.value });
  }

  captureImage() {
    htmlToImage.toPng(document.getElementById('divToPrint'), { quality: 0.55 })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'OG-Structure.png';
        link.href = dataUrl;
        link.click();
        this.setState({ isimageLoading: false })
      });
  }

  componentDidMount() {
    this.GotoParent();
  }

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
        text='Exporting File!'>
        <div className="root">
          <div className="content">
            <div className="full-width">
              <div className="donwload-group fixed-top">
                <h4 className="export">Export as :</h4>
                <ButtonGroup variant="text" id="download-button" color="primary" aria-label="text primary button group">
                  <Button onClick={this.printDocument} className="my-donwload" disabled={this.state.isLoading}>{this.state.isLoading ? <i class="fa fa-spinner fa-spin"></i> : <PictureAsPdfIcon />}&nbsp;{this.state.isLoading ? "Exporting PDF" : "PDF"}</Button>
                  <Button onClick={this.downloadImage} className="my-donwload" disabled={this.state.isimageLoading}>{this.state.isLoading ? <i class="fa fa-spinner fa-spin"></i> : <CloudDownloadIcon />}&nbsp;{this.state.isimageLoading ? "Exporting Image" : "Image"}</Button>
                  <Button onClick={this.captureImage} className="my-donwload"><AddAPhotoIcon /></Button>
                </ButtonGroup>
              </div>
              <div className="mt4">
                <div className="App" id="initechOrgChart">

                  <p><a class="btn btn-success" href="javascript:void(0);" onClick={this.generate}>Generate Screenshot &raquo;</a></p>

                  <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <React.Fragment>
                        <div className="tools fixed-top">
                          <ButtonGroup variant="text" className="zoom-in-out" color="primary" aria-label="text primary button group">
                            <Button className="my-donwload" onClick={zoomIn}><ZoomInIcon /></Button>
                            <Button className="my-donwload" onClick={zoomOut}><ZoomOutIcon /></Button>
                            <Button className="my-donwload" onClick={resetTransform} onClickCapture={this.GotoParent}><RotateLeftIcon /></Button>
                            <Button>
                              <input type="color" id="color-picker"
                                className="btn btn-outline" onChange={this.getcolor}></input>
                            </Button>
                          </ButtonGroup>
                        </div>
                        <TransformComponent>
                          <div id="divToPrint" className="mt4" >
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