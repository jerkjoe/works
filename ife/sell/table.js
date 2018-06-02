class Table {
    constructor(data) {
        this.order = data.order;
        this.data = data.data;
    }

    createTable() {
        let table = document.createElement("table");
        table.appendChild(this.createTableHead());
        this.createTableRows().forEach(e=>{
            table.appendChild(e);
        });

        return table;
    }

    createTableHead() {
        let tr = document.createElement("tr");
        if (this.order.product) {
            tr.innerHTML = `<th>产品</th><th>地区</th>`;
        }
        else {
            tr.innerHTML = `<th>地区</th><th>产品</th>`;
        }
        this.data[0].sale.forEach((e, index) => {
            tr.innerHTML += `<th>${index + 1}月</th>`
        });
        // console.log(tr);
        // console.log(this.createTableRows());
        
        return tr;
    }

    createTableRows() {
        let arr = [];
        let length = this.order.region || this.order.product;
        let first, second;
        if (this.order.region) {
            first = "region";
            second = "product";
        }
        else {
            first = "product";
            second = "region";
        }
        let tbody = document.createElement("tbody");
        this.data.forEach((e, index) => {
            let tr = document.createElement("tr");
            
            tr.classList.add("row");
            if (index % length === 0) {
                tr.classList.add("first")
                tr.innerHTML = `<td rowspan=${length}><span>${e[first]}</span></td>
                                <td><span>${e[second]}</span></td>`
            }
            else {
                tr.innerHTML = `<td class="hide"><span>${e[first]}</span></td>
                                <td><span>${e[second]}</span></td>`
            }
            tr.innerHTML += `<td><span>${e.sale[0]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[1]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[2]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[3]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[4]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[5]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[6]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[7]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[8]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[9]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[10]}</span><input type="number"><span class="edit">编辑</span></td>
                <td><span>${e.sale[11]}</span><input type="number"><span class="edit">编辑</span></td>`
            if(index % length === length-1){
                tbody.appendChild(tr);
                arr.push(tbody)
                tbody = document.createElement("tbody");
            }
            else{
                tbody.appendChild(tr);
            }
        });
        // console.log(arr);
        return arr;
    }






}