<template>
    <div class="grid">
        <figure class="effect-econ">
            <img src="@/assets/Singapore.jpg" alt="img1"/>
            <figcaption>
                <div>
                    <h2>Singapore</h2>
                    <p>GDP per capita is $61,000</p>
                    <p>GDP is $343.3 billion</p>
                </div>
            </figcaption>
        </figure>    
        <figure class="effect-econ">
            <img src="@/assets/Brunei.jpg" alt="img2"/>
            <figcaption>
                <div>
                    <h2>Brunei</h2>
                    <p>GDP per capita is $28,000</p>
                    <p>GDP is $12.13 billion</p>
                </div>
            </figcaption>
        </figure>
        <figure class="effect-econ">
            <img src="@/assets/Ireland.jpg" alt="img3"/>
            <figcaption>
                <div>
                    <h2>Ireland</h2>
                    <p>GDP per capita is $69,727</p>
                    <p>GDP is $338.5 billion</p>
                </div>
            </figcaption>
        </figure>
        <figure class="effect-econ">
            <img src="@/assets/Luxemburg.jpg" alt="img4"/>
            <figcaption>
                <div>
                    <h2>Luxemburg</h2>
                    <p>GDP per capita is $105,280</p>
                    <p>GDP is $64.02 billion</p>
                </div>
            </figcaption>
        </figure>
        <figure class="effect-econ">
            <img src="@/assets/Qatar.jpg" alt="img5"/>
            <figcaption>
                <div>
                    <h2>Qatar</h2>
                    <p>GDP per capita is $61,264</p>
                    <p>GDP is $161.1 billion</p>
                </div>
            </figcaption>
        </figure>
        <figure class="effect-econ">
            <img src="@/assets/UAE.jpg" alt="img6"/>
            <figcaption>
                <div>
                    <h2>UAE</h2>
                    <p>GDP per capita is $40,325</p>
                    <p>GDP is $385.6 billion</p>
                </div>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.grid {
position: relative;
margin: 0 auto;
padding: 1em 0 4em;
max-width: 1000px;
list-style: none;
text-align: center;
}

/* Common style */
.grid figure {
position: relative;
float: left;
overflow: hidden;
margin: 10px 1%;
min-width: 320px;
max-width: 480px;
max-height: 360px;
width: 48%;
background: #3085a3;
text-align: center;
cursor: pointer;
}

.grid figure img {
height: 250px;
width: 250px;
position: relative;
display: block;
min-height: 100%;
max-width: 100%;
opacity: 0.8;
}

.grid figure figcaption {
padding: 2em;
color: #fff;
text-transform: uppercase;
font-size: 1.25em;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

.grid figure h2 {
word-spacing: -0.15em;
font-weight: 300;
}

.grid figure h2,
.grid figure p {
margin: 0;
}

.grid figure p {
letter-spacing: 1px;
font-size: 19px;
font-weight: bold;
}

figure.effect-econ img {
max-width: none;
width: -webkit-calc(100% + 50px);
width: calc(100% + 50px);
opacity: 0.7;
-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
transition: opacity 0.35s, transform 0.35s;
-webkit-transform: translate3d(-40px,0, 0);
transform: translate3d(-40px,0,0);
}

figure.effect-econ figcaption {
text-align: left;
}

figure.effect-econ figcaption > div {
position: absolute;
bottom: 0;
left: 0;
padding: 2em;
width: 100%;
height: 50%;
}

figure.effect-econ h2,
figure.effect-econ p {
-webkit-transform: translate3d(0,40px,0);
transform: translate3d(0,40px,0);
}

figure.effect-econ h2 {
-webkit-transition: -webkit-transform 0.35s;
transition: transform 0.35s;
}

figure.effect-econ p {
color: rgba(255,255,255,0.8);
font-weight: 400;
opacity: 0;
-webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
transition: opacity 0.2s, transform 0.35s;
}

figure.effect-econ:hover img,
figure.effect-econ:hover p {
opacity: 1;
}

figure.effect-econ:hover img,
figure.effect-econ:hover h2,
figure.effect-econ:hover p {
-webkit-transform: translate3d(0,0,0);
transform: translate3d(0,0,0);
}

figure.effect-econ:hover p {
-webkit-transition-delay: 0.05s;
transition-delay: 0.05s;
-webkit-transition-duration: 0.35s;
transition-duration: 0.35s;
}
</style>