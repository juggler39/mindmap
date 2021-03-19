export default function () {
    return `
        <svg viewBox="0 0 1718 1408" xmlns="http://www.w3.org/2000/svg">
    
    
    
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
                <rect x="454" y="404" width="810" height="600" fill="#FFF" />
                <rect x="549" y="499" width="620" height="410" fill="#000" />
            </mask>
    
            <clipPath id="c1">
                <rect x="549" y="499" width="620" height="410" />
            </clipPath>
    
    
            <!-- b2 clip & mask -->
    
            <mask id="m2">
                <rect x="254" y="254" width="1210" height="900" fill="#FFF" />
                <rect x="339" y="339" width="1040" height="730" fill="#000" />
            </mask>
    
            <clipPath id="c2">
                <rect x="339" y="339" width="1040" height="730" />
            </clipPath>
    
    
            <!-- b3 clip & mask -->
    
            <mask id="m3">
                <rect x="124" y="124" width="1470" height="1160" fill="#FFF" />
                <rect x="199" y="199" width="1320" height="1010" fill="#000" />
            </mask>
    
            <clipPath id="c3">
                <rect x="199" y="199" width="1320" height="1010" />
            </clipPath>
    
    
    
        </defs>
    
    
    
        <!--
            Lines
        -->
    
        <g stroke="url(#g4)">
            <line class="mm-line" stroke-dasharray="12 6" x1="859" y1="704" x2="549" y2="499" />
            <line class="mm-line" stroke-dasharray="12 6" x1="859" y1="704" x2="549" y2="909" />
            <line class="mm-line" stroke-dasharray="12 6" x1="859" y1="704" x2="1169" y2="909" />
            <line class="mm-line" stroke-dasharray="12 6" x1="859" y1="704" x2="1169" y2="499" />
        </g>
    
        <g>
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="549" y1="704" x2="339" y2="704" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="859" y1="909" x2="859" y2="1069" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="1169" y1="704" x2="1379" y2="704" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="859" y1="499" x2="859" y2="339" />
        </g>
    
        <g>
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="339" y1="339" x2="199" y2="199" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="339" y1="1069" x2="199" y2="1209" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="1379" y1="1069" x2="1519" y2="1209" />
            <line class="mm-line mm-line--orange" stroke-dasharray="12 6" x1="1379" y1="339" x2="1519" y2="199" />
        </g>
    
    
    
        <!--
            Border 1
        -->
    
        <rect class="mm-border mm-border--bg" x="549" y="499" width="620" height="410" />
    
        <g id="b1" stroke="url(#g1)">
            <rect class="mm-border" x="549" y="499" width="620" height="410" />
            <g mask="url(#m1)">
                <circle class="mm-lg mm-border" r="90" cx="549" cy="499" />
                <circle class="mm-lg mm-border" r="90" cx="549" cy="909" />
                <circle class="mm-lg mm-border" r="90" cx="1169" cy="909" />
                <circle class="mm-lg mm-border" r="90" cx="1169" cy="499" />
            </g>
            <g clip-path="url(#c1)">
                <circle class="mm-sm mm-border" r="90" cx="549" cy="499" />
                <circle class="mm-sm mm-border" r="90" cx="549" cy="909" />
                <circle class="mm-sm mm-border" r="90" cx="1169" cy="909" />
                <circle class="mm-sm mm-border" r="90" cx="1169" cy="499" />
            </g>
        </g>
    
    
    
        <!--
            Border 2
        -->
    
        <rect class="mm-border mm-border--bg" x="339" y="339" width="1040" height="730" />
    
        <g id="b2" stroke="url(#g2)">
            <rect class="mm-border" x="339" y="339" width="1040" height="730" />
            <g mask="url(#m2)">
                <circle class="mm-lg mm-border" r="80" cx="339" cy="339" />
                <circle class="mm-mt mm-border" r="80" cx="339" cy="704" />
                <circle class="mm-lg mm-border" r="80" cx="339" cy="1069" />
                <circle class="mm-mt mm-border" r="80" cx="859" cy="1069" />
                <circle class="mm-lg mm-border" r="80" cx="1379" cy="1069" />
                <circle class="mm-mt mm-border" r="80" cx="1379" cy="704" />
                <circle class="mm-lg mm-border" r="80" cx="1379" cy="339" />
                <circle class="mm-mt mm-border" r="80" cx="859" cy="339" />
            </g>
            <g clip-path="url(#c2)">
                <circle class="mm-sm mm-border" r="80" cx="339" cy="339" />
                <circle class="mm-mb mm-border" r="80" cx="339" cy="704" />
                <circle class="mm-sm mm-border" r="80" cx="339" cy="1069" />
                <circle class="mm-mb mm-border" r="80" cx="859" cy="1069" />
                <circle class="mm-sm mm-border" r="80" cx="1379" cy="1069" />
                <circle class="mm-mb mm-border" r="80" cx="1379" cy="704" />
                <circle class="mm-sm mm-border" r="80" cx="1379" cy="339" />
                <circle class="mm-mb mm-border" r="80" cx="859" cy="339" />
            </g>
    
        </g>
    
    
    
        <!--
            Border 3
        -->
    
        <rect class="mm-border mm-border--bg" x="199" y="199" width="1320" height="1010" />
    
        <g id="b3" stroke="url(#g3)">
            <rect class="mm-border" x="199" y="199" width="1320" height="1010" />
            <g mask="url(#m3)">
                <circle class="mm-lg mm-border" r="70" cx="199" cy="199" />
                <circle class="mm-lg mm-border" r="70" cx="199" cy="1209" />
                <circle class="mm-lg mm-border" r="70" cx="1519" cy="1209" />
                <circle class="mm-lg mm-border" r="70" cx="1519" cy="199" />
            </g>
            <g clip-path="url(#c3)">
                <circle class="mm-sm mm-border" r="70" cx="199" cy="199" />
                <circle class="mm-sm mm-border" r="70" cx="199" cy="1209" />
                <circle class="mm-sm mm-border" r="70" cx="1519" cy="1209" />
                <circle class="mm-sm mm-border" r="70" cx="1519" cy="199" />
            </g>
        </g>
    
    
    
        <!--
            Planets 1
        -->
    
        <circle class="mm-planet" r="85" cx="549" cy="499" />
        <circle class="mm-planet" r="85" cx="549" cy="909" />
        <circle class="mm-planet" r="85" cx="1169" cy="909" />
        <circle class="mm-planet" r="85" cx="1169" cy="499" />
    
    
    
        <!--
            Planets 2
        -->
    
        <g>
            <circle class="mm-planet" r="75" cx="339" cy="339" />
            <circle class="mm-planet" r="75" cx="339" cy="704" />
            <circle class="mm-planet" r="75" cx="339" cy="1069" />
            <circle class="mm-planet" r="75" cx="859" cy="1069" />
            <circle class="mm-planet" r="75" cx="1379" cy="1069" />
            <circle class="mm-planet" r="75" cx="1379" cy="704" />
            <circle class="mm-planet" r="75" cx="1379" cy="339" />
            <circle class="mm-planet" r="75" cx="859" cy="339" />
        </g>
    
    
    
        <!--
            Planets 3
        -->
    
        <circle class="mm-planet" r="65" cx="199" cy="199" />
        <circle class="mm-planet" r="65" cx="199" cy="1209" />
        <circle class="mm-planet" r="65" cx="1519" cy="1209" />
        <circle class="mm-planet" r="65" cx="1519" cy="199" />
    
    
    
        <!--
            Sun
        -->
    
        <circle class="mm-planet" r="120" cx="859" cy="704" />
    
    
    
    </svg>`
}