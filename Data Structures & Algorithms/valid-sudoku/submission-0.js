class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const box = new Map();
        

        for(let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                const val = board[row][col]
                if(val === ".") continue;

                if(!rows.has(row)) rows.set(row, new Set())
                if(rows.get(row).has(val)) return false;
                rows.get(row).add(val);

                if(!cols.has(col)) cols.set(col, new Set())
                if(cols.get(col).has(val)) return false;
                cols.get(col).add(val)

                const boxKey = `${Math.floor(row/3)}-${Math.floor(col/3)}`;
                if(!box.has(boxKey)) box.set(boxKey, new Set())
                if(box.get(boxKey).has(val)) return false;
                box.get(boxKey).add(val)    
            }
        }

        return true
    }
}
