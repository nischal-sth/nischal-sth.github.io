let dataset = [];

        
        function addValue() {
            let input = document.getElementById("number").value;
            let num = Number(input);

            if (isNaN(num)) {
                alert("i said a VALID NUMBER !!!");
                return;
            }

            dataset.push(num);
            displayDataset();
            computeMean();
        }

        
        function removeValue() {
            let input = document.getElementById("number").value;
            let num = Number(input);

            

            if (!dataset.includes(num)) {
                alert("its not in the dataset:(");
                return;
            }

            let index = dataset.indexOf(num);
            dataset.splice(index, 1);
            displayDataset();
            computeMean();
        }

        
        function computeMean() {
            if (dataset.length === 0) {
                document.getElementById("mean").innerText = "Mean: N/A";
                return;
            }

            let sum = 0;
            for (let i = 0; i < dataset.length; i++) {
                sum += dataset[i];
            }

            let mean = sum / dataset.length;
            document.getElementById("mean").innerText = "Mean: " + mean;
        }

        // display dataset
        function displayDataset() {
            document.getElementById("dataset").innerText = "Dataset: " + dataset.join(", ");
        }