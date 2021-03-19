export default function ({ w, h, x, y, dir }) {
    const x1 = x, x2 = x * 2, x3 = x * 3, x4 = x * 4, x5 = x * 5, x6 = x * 6;
    const y1 = y, y2 = y * 2, y3 = y * 3, y4 = y * 4, y5 = y * 5, y6 = y * 6;
    return `
        <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    
    
    
        <!--
            Defs
        -->
    
        <defs>
    
    
            <!-- gradients -->
    
            <linearGradient id="g1" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFFFF" offset="0%" />
                <stop stop-color="#0A69D2" offset="100%" />
            </linearGradient>
    
            <linearGradient id="g2" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4DA8FF" offset="15%"/>
                <stop stop-color="#FFE600" offset="70%"/>
                <stop stop-color="#FF9900" offset="100%" />
            </linearGradient>
    
            <linearGradient id="g3" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F305BC" offset="5%"/>
                <stop stop-color="#DCE742" offset="35%"/>
                <stop stop-color="#16B9ED" offset="100%" />
            </linearGradient>
    
            <linearGradient id="g4" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFFFF" stop-opacity="0" offset="20%" />
                <stop stop-color="#0A69D2" offset="50%" />
                <stop stop-color="#FFFFFF" stop-opacity="0" offset="80%" />
            </linearGradient>
    
    
            <!-- b1 clip & mask -->
    
            <mask id="m1">
                <rect x="${404 + x2}" y="${404 + y2}" width="${600 + x2}" height="${600 + y2}" fill="#FFF" />
                <rect x="${499 + x2}" y="${499 + y2}" width="${410 + x2}" height="${410 + y2}" fill="#000" />
            </mask>
    
            <clipPath id="c1">
                <rect x="${499 + x2}" y="${499 + y2}" width="${410 + x2}" height="${410 + y2}" />
            </clipPath>
    
    
            <!-- b2 clip & mask -->
    
            <mask id="m2">
                <rect x="${254 + x1}" y="${254 + y1}" width="${900 + x4}" height="${900 + y4}" fill="#FFF" />
                <rect x="${339 + x1}" y="${339 + y1}" width="${730 + x4}" height="${730 + y4}" fill="#000" />
            </mask>
    
            <clipPath id="c2">
                <rect x="${339 + x1}" y="${339 + y1}" width="${730 + x4}" height="${730 + y4}" />
            </clipPath>
    
    
            <!-- b3 clip & mask -->
    
            <mask id="m3">
                <rect x="${124}" y="${124}" width="${1160 + x6}" height="${1160 + y6}" fill="#FFF" />
                <rect x="${199}" y="${199}" width="${1010 + x6}" height="${1010 + y6}" fill="#000" />
            </mask>
    
            <clipPath id="c3">
                <rect x="${199}" y="${199}" width="${1010 + x6}" height="${1010 + y6}" />
            </clipPath>
    
    
    
        </defs>
 
    
    
        <!--
            Lines
        -->
    
        <g stroke="url(#g4)">
            <line class="mm-line" stroke-dasharray="12 6" x1="${704 + x3}" y1="${704 + y3}" x2="${499 + x2}" y2="${499 + y2}" />
            <line class="mm-line" stroke-dasharray="12 6" x1="${704 + x3}" y1="${704 + y3}" x2="${499 + x2}" y2="${909 + y4}" />
            <line class="mm-line" stroke-dasharray="12 6" x1="${704 + x3}" y1="${704 + y3}" x2="${909 + x4}" y2="${909 + y4}" />
            <line class="mm-line" stroke-dasharray="12 6" x1="${704 + x3}" y1="${704 + y3}" x2="${909 + x4}" y2="${499 + y2}" />
        </g>
    
        <g>
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${499 + x2}" y1="${704 + y3}" x2="${339 + x1}" y2="${704 + y3}" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${704 + x3}" y1="${909 + y4}" x2="${704 + x3}" y2="${1069 + y5}" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${909 + x4}" y1="${704 + y3}" x2="${1069 + x5}" y2="${704 + y3}" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${704 + x3}" y1="${499 + y2}" x2="${704 + x3}" y2="${339 + y1}" />
        </g>
    
        <g>
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${339 + x1}" y1="${339 + y1}" x2="${199}" y2="${199}" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${339 + x1}" y1="${1069 + y5}" x2="${199}" y2="${1209 + y6}" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${1069 + x5}" y1="${1069 + y5}" x2="${1209 + x6}" y2="${1209 + y6}" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="${1069 + x5}" y1="${339 + y1}" x2="${1209 + x6}" y2="${199}" />
        </g>
    
    
    
        <!--
            Border 3
        -->
    
        <rect class="mm-border mm-border--bg" x="${199}" y="${199}" width="${1010 + x6}" height="${1010 + y6}" />
    
        <g id="b3" stroke="url(#g3)">
            <rect class="mm-border" x="${199}" y="${199}" width="${1010 + x6}" height="${1010 + y6}" />
            <g mask="url(#m3)">
                <circle class="mm-lg mm-border" r="70" cx="${199}" cy="${199}" />
                <circle class="mm-lg mm-border" r="70" cx="${199}" cy="${1209 + y6}" />
                <circle class="mm-lg mm-border" r="70" cx="${1209 + x6}" cy="${1209 + y6}" />
                <circle class="mm-lg mm-border" r="70" cx="${1209 + x6}" cy="${199}" />
            </g>
            <g clip-path="url(#c3)">
                <circle class="mm-sm mm-border" r="70" cx="${199}" cy="${199}" />
                <circle class="mm-sm mm-border" r="70" cx="${199}" cy="${1209 + y6}" />
                <circle class="mm-sm mm-border" r="70" cx="${1209 + x6}" cy="${1209 + y6}" />
                <circle class="mm-sm mm-border" r="70" cx="${1209 + x6}" cy="${199}" />
            </g>
        </g>
        
            
            
        <!--
            Border 2
        -->
    
        <rect class="mm-border mm-border--bg" x="${339 + x1}" y="${339 + y1}" width="${730 + x4}" height="${730 + y4}" />
    
        <g id="b2" stroke="url(#g2)">
            <rect class="mm-border" x="${339 + x1}" y="${339 + y1}" width="${730 + x4}" height="${730 + y4}" />
            <g mask="url(#m2)">
                <circle class="mm-lg mm-border" r="80" cx="${339 + x1}" cy="${339 + y1}" />
                <circle class="mm-mt mm-border" r="80" cx="${339 + x1}" cy="${704 + y3}" />
                <circle class="mm-lg mm-border" r="80" cx="${339 + x1}" cy="${1069 + y5}" />
                <circle class="mm-mt mm-border" r="80" cx="${704 + x3}" cy="${1069 + y5}" />
                <circle class="mm-lg mm-border" r="80" cx="${1069 + x5}" cy="${1069 + y5}" />
                <circle class="mm-mt mm-border" r="80" cx="${1069 + x5}" cy="${704 + y3}" />
                <circle class="mm-lg mm-border" r="80" cx="${1069 + x5}" cy="${339 + y1}" />
                <circle class="mm-mt mm-border" r="80" cx="${704 + x3}" cy="${339 + y1}" />
            </g>
            <g clip-path="url(#c2)">
                <circle class="mm-sm mm-border" r="80" cx="${339 + x1}" cy="${339 + y1}" />
                <circle class="mm-mb mm-border" r="80" cx="${339 + x1}" cy="${704 + y3}" />
                <circle class="mm-sm mm-border" r="80" cx="${339 + x1}" cy="${1069 + y5}" />
                <circle class="mm-mb mm-border" r="80" cx="${704 + x3}" cy="${1069 + y5}" />
                <circle class="mm-sm mm-border" r="80" cx="${1069 + x5}" cy="${1069 + y5}" />
                <circle class="mm-mb mm-border" r="80" cx="${1069 + x5}" cy="${704 + y3}" />
                <circle class="mm-sm mm-border" r="80" cx="${1069 + x5}" cy="${339 + y1}" />
                <circle class="mm-mb mm-border" r="80" cx="${704 + x3}" cy="${339 + y1}" />
            </g>    
        </g>
        
        
        
        <!--
            Border 1
        -->
    
        <rect class="mm-border mm-border--bg" x="${499 + x2}" y="${499 + y2}" width="${410 + x2}" height="${410 + y2}" />
    
        <g id="b1" stroke="url(#g1)">
            <rect class="mm-border" x="${499 + x2}" y="${499 + y2}" width="${410 + x2}" height="${410 + y2}" />
            <g mask="url(#m1)">
                <circle class="mm-lg mm-border" r="90" cx="${499 + x2}" cy="${499 + y2}" />
                <circle class="mm-lg mm-border" r="90" cx="${499 + x2}" cy="${909 + y4}" />
                <circle class="mm-lg mm-border" r="90" cx="${909 + x4}" cy="${909 + y4}" />
                <circle class="mm-lg mm-border" r="90" cx="${909 + x4}" cy="${499 + y2}" />
            </g>
            <g clip-path="url(#c1)">
                <circle class="mm-sm mm-border" r="90" cx="${499 + x2}" cy="${499 + y2}" />
                <circle class="mm-sm mm-border" r="90" cx="${499 + x2}" cy="${909 + y4}" />
                <circle class="mm-sm mm-border" r="90" cx="${909 + x4}" cy="${909 + y4}" />
                <circle class="mm-sm mm-border" r="90" cx="${909 + x4}" cy="${499 + y2}" />
            </g>
        </g>
        
    
    
        <!--
            Planets 3
        -->
    
        <g>
            <circle class="mm-planet" r="65" cx="${199}" cy="${199}" />
            <circle class="mm-planet" r="65" cx="${199}" cy="${1209 + y6}" />
            <circle class="mm-planet" r="65" cx="${1209 + x6}" cy="${1209 + y6}" />
            <circle class="mm-planet" r="65" cx="${1209 + x6}" cy="${199}" />
        </g>



        <!--
            Planets 2
        -->
    
        <g>
            <circle class="mm-planet" r="75" cx="${339 + x1}" cy="${339 + y1}" />
            <circle class="mm-planet" r="75" cx="${339 + x1}" cy="${704 + y3}" />
            <circle class="mm-planet" r="75" cx="${339 + x1}" cy="${1069 + y5}" />            
            <circle class="mm-planet" r="75" cx="${704 + x3}" cy="${1069 + y5}" />
            <circle class="mm-planet" r="75" cx="${1069 + x5}" cy="${1069 + y5}" />
            <circle class="mm-planet" r="75" cx="${1069 + x5}" cy="${704 + y3}" />
            <circle class="mm-planet" r="75" cx="${1069 + x5}" cy="${339 + y1}" />
            <circle class="mm-planet" r="75" cx="${704 + x3}" cy="${339 + y1}" />    
        </g>



        <!--
            Orbit 1
        -->
        
        
        <!-- fluency (499, 499, 85) -->
    
        <g transform="translate(${499 - 85 + x2} ${499 - 85 + y2})">
        
            <g class="mm-moon">
                <image x="30" y="30" height="110" width="110" href="${dir}/m8.png"/>
                <text y="85">
                    <tspan x="85" dy="-20">Read-Aloud</tspan>
                    <tspan x="85" dy="20">Retelling</tspan>
                    <tspan x="85" dy="20">Assignment</tspan>
                </text>
            </g>
            
            <g class="mm-moon">
                <image x="30" y="30" height="110" width="110" href="${dir}/m6.png"/>
                <text y="85">
                    <tspan x="85" dy="-10">Read-Aloud</tspan>
                    <tspan x="85" dy="20">in a Book</tspan>        
                </text>
            </g>            
            
            <g class="mm-moon">
                <image x="30" y="30" height="110" width="110" href="${dir}/m4.png"/>
                <text y="85">
                    <tspan x="85" dy="-30">Speaking</tspan>
                    <tspan x="85" dy="20">Listening</tspan>
                    <tspan x="85" dy="20">Writing</tspan>
                    <tspan x="85" dy="20">Assignment</tspan>
                </text>
            </g>            
            
            <g class="mm-moon">
                <image x="30" y="30" height="110" width="110" href="${dir}/m2.png"/>
                <text y="85">
                    <tspan x="85" dy="-10">Running</tspan>
                    <tspan x="85" dy="20">Record</tspan>
                </text>
            </g>            
        
            <g class="mm-planet">
                <circle r="85" cx="85" cy="85" />
                <image x="0" y="0" height="170" width="170" href="${dir}/p3.png"/>
                <image x="85" y="85" height="47" width="47" transform="translate(-23.5, 5)" href="${dir}/video.png"/>
                <text x="85" y="85">
                    <tspan dy="-5">Fluency</tspan>
                </text>
            </g>          
            
        </g>
        
        
        <!-- fluency (499, 499, 85) -->
        
        <circle class="mm-planet" r="85" cx="${499 + x2}" cy="${909 + y4}" />
        <circle class="mm-planet" r="85" cx="${909 + x4}" cy="${909 + y4}" />
        
        
        <circle class="mm-planet" r="85" cx="${909 + x4}" cy="${499 + y2}" />
    
    
    
        <!--
            Sun
        -->
    
        <circle class="mm-planet" r="120" cx="${704 + x3}" cy="${704 + y3}" />
        
        
        
        <!--
            Overlay
        -->
        
        <rect class="mm-overlay" x="0" y="0" width="${w}" height="${h}"></rect>
    
    
    
    </svg>`
}