alert((
    rowCount => {
        var strAnsw = ''
        for (let i = 0; i <= rowCount; i++) {
            var rowText = ''
            const row = [1];
            for (let j = 1; j <= i; j++) {
                row.push(row[j - 1] * (i + 1 - j) / j);
                rowText += row.join(" ")
            }
            strAnsw += Array((rowCount - i + 1)).join(" ") + row + '\n';
        }
        return strAnsw;
    })(prompt("Enter the height of the Pascal Triangle"))
)
