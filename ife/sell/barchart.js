// create SVG bar chart
class Barchart {
    constructor(data) {
        this.title = data[0]+' - '+data[1] ; // array contains region, product, sale amount 
        this.data = data.splice(2);
    }



    createChart() {
        // let test = [120, 110, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
        
        let width = window.innerWidth / 2.5,
            height = window.innerWidth / 4;
        let svg = this.createSVG("svg", {
            width: width,
            height: height,
            viewBox: "0,0,400,250"
        });
        let yAxis = this.createSVG("line", {
            x1: 30,
            x2: 30,
            y1: 215,
            y2: 5,
            stroke: "#666"
        });
        let xAxis = this.createSVG("line", {
            x1: 30,
            x2: 400,
            y1: 215,
            y2: 215,
            stroke: "#666"
        })
        let title = this.createSVG("text", {
            x: 180,
            y: 245,
            "font-size":12
        });
        title.innerHTML = this.title;
        svg.appendChild(yAxis);
        svg.appendChild(xAxis);
        svg.appendChild(title);

        let max = Math.max(...this.data);
        for (let i = 1; i < 7; i++) {
            // y-labels
            let label = this.createSVG("text", {
                x: 25,
                y: 215 - i * 35 + 5,
                "font-size": 10,
                "text-anchor": "end"
            })
            label.textContent = i * Math.round(max / 5);

            // Auxiliary line
            let auxLine = this.createSVG("line", {
                x1: 31,
                x2: 400,
                y1: 215 - i * 35,
                y2: 215 - i * 35,
                stroke: "#a3a3a3"
            });

            svg.appendChild(label);
            svg.appendChild(auxLine);
        }
        let scaleFactor = 175 / max;
        let plotStart = 40;
        this.data.forEach((e,index) => {
            //create x-labels
            let text = this.createSVG("text", {
                x: plotStart+1,
                y: 225,
                "font-size":10,
                // "text-anchor":"start"
            });
            text.textContent = `${index+1}月`
            //create bars
            let rect = this.createSVG("rect", {
                x: plotStart,
                y: 215 - (e - "") * scaleFactor,
                width: 20,
                height: (e - "") * scaleFactor
            });
            plotStart += 30;
            svg.appendChild(rect);
            svg.appendChild(text);
        });
        return svg;
    }

    createAxis(data) {
        // every 50 - y-axis
        var y = Math.max(...data);
        let count = Math.ceil(y / 10);

        // 绘制Y轴
        let lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");
        lineY.setAttribute("x1", "30")
        lineY.setAttribute("x2", "30")
        lineY.setAttribute("y1", 300)
        lineY.setAttribute("y2", 350 - 50 - count * 25)
        lineY.setAttribute("stroke", "#666")
        chart.appendChild(lineY);

        // 绘制 Y轴 上的数据单位 还有标记线
        for (let i = 0; i < count + 1; i++) {
            // 标记线
            let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", "30")
            line.setAttribute("x2", "680")
            line.setAttribute("y1", 350 - i * 25 - 50)
            line.setAttribute("y2", 350 - i * 25 - 50)
            line.setAttribute("stroke", "#b3b3b3")
            chart.appendChild(line);

            // label
            let label = document.createElementNS("http://www.w3.org/2000/svg", "text");
            label.textContent = i * 50;
            label.setAttribute("x", 25);
            label.setAttribute("y", 300 - i * 25 + 5)
            label.setAttribute("text-anchor", "end")
            chart.appendChild(label);
        }
        // xAxis
        let lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
        lineX.setAttribute("x1", "30")
        lineX.setAttribute("x2", "640")
        lineX.setAttribute("y1", 300)
        lineX.setAttribute("y2", 300)
        lineX.setAttribute("stroke", "#666")
        chart.appendChild(lineX);
    }


    createSVG(name, attributes) {
        let element = document.createElementNS("http://www.w3.org/2000/svg", name)
        for (let attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
        return element;
    }

}