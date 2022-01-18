<script>
// javascript program to Find number of
// Triplets 1 <= a <= b<= c <= n,
// Such that a^2 + b^2 = c^2
 
    // function to ind number of
    // Triplets 1 <= a <= b<= c <= n,
    // Such that a^2 + b^2 = c^2
    function Triplets(n)
    {
     
        // to store required answer
        var ans = 0;
 
        // run nested loops for first two numbers.
        for (let i = 1; i <= n; ++i) {
            for (let j = i; j <= n; ++j) {
                var x = i * i + j * j;
 
                // third number
                var y = parseInt( Math.sqrt(x));
 
                // check if third number is perfect
                // square and less than n
                if (y * y == x && y <= n)
                    ++ans;
            }
        }
        return ans;
    }
 
    // Driver code
    var n = 10;
 
    // function call
    document.write(Triplets(n));
 
// This code is contributed by shikhasingrajput
</script>