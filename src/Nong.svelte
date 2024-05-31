<script>
    let number = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'];
    let currentFrame = '01'
    let count = 0;
    const fps = 60;
    function run() {
        if (count < 15) {
            currentFrame = number[count];
            count++;
            setTimeout(() => {
                window.requestAnimationFrame(run);
            }, 1000/fps)
        }
        if (count ==15) {
            count = 0;
        }
    }
    window.requestAnimationFrame(run);

</script>

<div id="container">
    <img class="nong-img hide" id="img{ currentFrame }" src="img/Running00{ currentFrame }.png" alt="Nong-Mha">
</div>

<style>
    #container {
        width: 300px;
        height: 180px;
        overflow: hidden;
    }
    .nong-img {
        margin-top: -180px;
        margin-left: -100px;
        width: 1000px;
        background-size: 100% 100%;
        object-position: 20% 10%;
        -webkit-app-region: drag;
    }
</style>