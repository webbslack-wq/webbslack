interface CaseStudyScreenshotsProps {
  domainTag: string;
  className?: string;
}

export function getScreenshots(domainTag: string): JSX.Element[] {
  const screenshots: Record<string, JSX.Element[]> = {
    RESTAURANT: [
      // Desktop view
      <svg key="restaurant-1" viewBox="0 0 400 500" className="w-full h-auto">
        <defs>
          <linearGradient id="rest-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="#ffffff" />
        {/* Header */}
        <rect width="400" height="80" fill="url(#rest-gradient)" />
        <text x="20" y="50" fontSize="20" fontWeight="bold" fill="white">Restaurant Menu</text>

        {/* Menu items */}
        <g opacity="0.9">
          <rect x="15" y="100" width="370" height="80" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="25" y="110" width="50" height="50" fill="#f97316" rx="4" />
          <text x="90" y="130" fontSize="12" fontWeight="bold" fill="#333">Butter Chicken</text>
          <text x="90" y="150" fontSize="10" fill="#666">Classic spiced curry</text>
          <text x="330" y="140" fontSize="14" fontWeight="bold" fill="#f97316" textAnchor="end">₹350</text>

          <rect x="15" y="195" width="370" height="80" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="25" y="205" width="50" height="50" fill="#fbbf24" rx="4" />
          <text x="90" y="225" fontSize="12" fontWeight="bold" fill="#333">Tandoori Chicken</text>
          <text x="90" y="245" fontSize="10" fill="#666">Smoky perfection</text>
          <text x="330" y="235" fontSize="14" fontWeight="bold" fill="#f97316" textAnchor="end">₹450</text>

          <rect x="15" y="290" width="370" height="80" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="25" y="300" width="50" height="50" fill="#ff8c42" rx="4" />
          <text x="90" y="320" fontSize="12" fontWeight="bold" fill="#333">Biryani Rice</text>
          <text x="90" y="340" fontSize="10" fill="#666">Fragrant basmati</text>
          <text x="330" y="330" fontSize="14" fontWeight="bold" fill="#f97316" textAnchor="end">₹280</text>
        </g>

        {/* Book button */}
        <rect x="20" y="420" width="360" height="45" rx="6" fill="#1e40af" />
        <text x="200" y="450" fontSize="13" fill="white" textAnchor="middle" fontWeight="bold">Book a Table</text>
      </svg>,
      // Mobile view
      <svg key="restaurant-2" viewBox="0 0 280 500" className="w-full h-auto">
        <defs>
          <linearGradient id="rest-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#ffffff" rx="16" />

        {/* Status bar */}
        <rect x="8" y="8" width="264" height="24" fill="#f97316" rx="12" />

        {/* Content */}
        <rect x="8" y="32" width="264" height="70" fill="url(#rest-gradient-2)" rx="12" />
        <text x="20" y="75" fontSize="16" fontWeight="bold" fill="white">Today's Special</text>

        {/* Dishes */}
        <g>
          <rect x="15" y="115" width="250" height="70" fill="#f8f9fa" stroke="#e0e0e0" rx="6" strokeWidth="1" />
          <circle cx="35" cy="150" r="20" fill="#f97316" />
          <text x="65" y="135" fontSize="11" fontWeight="bold" fill="#333">Paneer Tikka</text>
          <text x="65" y="150" fontSize="9" fill="#666">₹280</text>
          <text x="240" y="145" fontSize="10" fill="#f97316" fontWeight="bold" textAnchor="end">→</text>

          <rect x="15" y="200" width="250" height="70" fill="#f8f9fa" stroke="#e0e0e0" rx="6" strokeWidth="1" />
          <circle cx="35" cy="235" r="20" fill="#fbbf24" />
          <text x="65" y="220" fontSize="11" fontWeight="bold" fill="#333">Garlic Naan</text>
          <text x="65" y="235" fontSize="9" fill="#666">₹120</text>
          <text x="240" y="230" fontSize="10" fill="#f97316" fontWeight="bold" textAnchor="end">→</text>

          <rect x="15" y="285" width="250" height="70" fill="#f8f9fa" stroke="#e0e0e0" rx="6" strokeWidth="1" />
          <circle cx="35" cy="320" r="20" fill="#ff8c42" />
          <text x="65" y="305" fontSize="11" fontWeight="bold" fill="#333">Gulab Jamun</text>
          <text x="65" y="320" fontSize="9" fill="#666">₹150</text>
          <text x="240" y="315" fontSize="10" fill="#f97316" fontWeight="bold" textAnchor="end">→</text>
        </g>

        {/* Bottom button */}
        <rect x="20" y="420" width="240" height="40" rx="6" fill="#1e40af" />
        <text x="140" y="447" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">Reserve Now</text>
      </svg>,
    ],
    SALON: [
      <svg key="salon-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#ffffff" />
        {/* Header */}
        <rect width="400" height="80" fill="#ec4899" />
        <text x="20" y="50" fontSize="20" fontWeight="bold" fill="white">Book Your Stylist</text>

        {/* Stylists grid */}
        <g opacity="0.9">
          <rect x="15" y="100" width="370" height="90" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="55" cy="145" r="22" fill="#d1d5db" />
          <text x="55" y="150" fontSize="16" textAnchor="middle">👩</text>
          <text x="90" y="130" fontSize="12" fontWeight="bold" fill="#333">Priya - Hair Specialist</text>
          <text x="90" y="150" fontSize="10" fill="#666">⭐⭐⭐⭐⭐ • ₹500</text>
          <rect x="320" y="135" width="50" height="30" fill="#ec4899" rx="4" />
          <text x="345" y="153" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">Book</text>

          <rect x="15" y="210" width="370" height="90" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="55" cy="255" r="22" fill="#d1d5db" />
          <text x="55" y="260" fontSize="16" textAnchor="middle">👨</text>
          <text x="90" y="240" fontSize="12" fontWeight="bold" fill="#333">Arjun - Color Expert</text>
          <text x="90" y="260" fontSize="10" fill="#666">⭐⭐⭐⭐ • ₹600</text>
          <rect x="320" y="245" width="50" height="30" fill="#ec4899" rx="4" />
          <text x="345" y="263" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">Book</text>

          <rect x="15" y="320" width="370" height="90" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="55" cy="365" r="22" fill="#d1d5db" />
          <text x="55" y="370" fontSize="16" textAnchor="middle">👩</text>
          <text x="90" y="350" fontSize="12" fontWeight="bold" fill="#333">Zara - Makeup Artist</text>
          <text x="90" y="370" fontSize="10" fill="#666">⭐⭐⭐⭐⭐ • ₹700</text>
          <rect x="320" y="355" width="50" height="30" fill="#ec4899" rx="4" />
          <text x="345" y="373" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">Book</text>
        </g>
      </svg>,
      <svg key="salon-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#ffffff" rx="16" />

        {/* Header */}
        <rect x="8" y="8" width="264" height="50" fill="#ec4899" rx="12" />
        <text x="20" y="40" fontSize="14" fontWeight="bold" fill="white">Appointment</text>

        {/* Calendar/slots */}
        <text x="20" y="75" fontSize="12" fontWeight="bold" fill="#333">Today - 3:00 PM</text>
        <text x="20" y="95" fontSize="11" fill="#666">Priya's Schedule</text>

        <rect x="15" y="110" width="250" height="50" fill="#f0fdf4" stroke="#d1fae5" strokeWidth="2" rx="6" />
        <text x="25" y="133" fontSize="11" fontWeight="bold" fill="#ec4899">✓ Confirmed</text>
        <text x="25" y="150" fontSize="10" fill="#666">Hair Cut & Color</text>

        <text x="20" y="190" fontSize="12" fontWeight="bold" fill="#333">Available Slots</text>

        {/* Time slots */}
        <rect x="15" y="210" width="57" height="40" fill="#f8f9fa" stroke="#e0e0e0" rx="4" strokeWidth="1" />
        <text x="43.5" y="237" fontSize="10" textAnchor="middle" fontWeight="bold">9:00 AM</text>

        <rect x="78" y="210" width="57" height="40" fill="#ec4899" stroke="#ec4899" rx="4" strokeWidth="1" />
        <text x="106.5" y="237" fontSize="10" textAnchor="middle" fontWeight="bold" fill="white">12:00 PM</text>

        <rect x="141" y="210" width="57" height="40" fill="#f8f9fa" stroke="#e0e0e0" rx="4" strokeWidth="1" />
        <text x="169.5" y="237" fontSize="10" textAnchor="middle" fontWeight="bold">3:00 PM</text>

        <rect x="204" y="210" width="51" height="40" fill="#f8f9fa" stroke="#e0e0e0" rx="4" strokeWidth="1" />
        <text x="229.5" y="237" fontSize="10" textAnchor="middle" fontWeight="bold">6:00 PM</text>

        <rect x="15" y="270" width="250" height="40" rx="4" fill="#ec4899" />
        <text x="140" y="295" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">Confirm Booking</text>
      </svg>,
    ],
    FINTECH: [
      <svg key="fintech-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#f8f9fa" />
        {/* Header */}
        <rect width="400" height="90" fill="#10b981" />
        <text x="20" y="40" fontSize="16" fill="white">Account Overview</text>
        <text x="20" y="65" fontSize="24" fontWeight="bold" fill="white">₹24,50,000</text>

        {/* Transactions */}
        <text x="20" y="120" fontSize="12" fontWeight="bold" fill="#333">Recent Activity</text>

        <g>
          <rect x="15" y="135" width="370" height="60" fill="white" stroke="#e0e0e0" rx="6" strokeWidth="1" />
          <circle cx="35" cy="165" r="12" fill="#ef4444" opacity="0.2" />
          <text x="35" y="168" fontSize="12" textAnchor="middle" fontWeight="bold">↓</text>
          <text x="60" y="155" fontSize="11" fontWeight="bold" fill="#333">Payment to Vendor</text>
          <text x="60" y="175" fontSize="10" fill="#666">Today at 2:30 PM</text>
          <text x="360" y="160" fontSize="12" fontWeight="bold" fill="#ef4444" textAnchor="end">-₹50,000</text>

          <rect x="15" y="210" width="370" height="60" fill="white" stroke="#e0e0e0" rx="6" strokeWidth="1" />
          <circle cx="35" cy="240" r="12" fill="#10b981" opacity="0.2" />
          <text x="35" y="243" fontSize="12" textAnchor="middle" fontWeight="bold">↑</text>
          <text x="60" y="230" fontSize="11" fontWeight="bold" fill="#333">Received from Client</text>
          <text x="60" y="250" fontSize="10" fill="#666">Yesterday at 5:15 PM</text>
          <text x="360" y="235" fontSize="12" fontWeight="bold" fill="#10b981" textAnchor="end">+₹2,00,000</text>

          <rect x="15" y="285" width="370" height="60" fill="white" stroke="#e0e0e0" rx="6" strokeWidth="1" />
          <circle cx="35" cy="315" r="12" fill="#ef4444" opacity="0.2" />
          <text x="35" y="318" fontSize="12" textAnchor="middle" fontWeight="bold">↓</text>
          <text x="60" y="305" fontSize="11" fontWeight="bold" fill="#333">Transfer to Savings</text>
          <text x="60" y="325" fontSize="10" fill="#666">2 days ago</text>
          <text x="360" y="310" fontSize="12" fontWeight="bold" fill="#ef4444" textAnchor="end">-₹1,00,000</text>
        </g>
      </svg>,
      <svg key="fintech-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#f8f9fa" rx="16" />

        {/* Card */}
        <rect x="20" y="30" width="240" height="130" fill="#10b981" rx="12" />
        <text x="35" y="55" fontSize="10" fill="#d1fae5">Balance</text>
        <text x="35" y="85" fontSize="22" fontWeight="bold" fill="white">₹24.50L</text>
        <text x="35" y="110" fontSize="10" fill="#d1fae5">Account: 2890...4521</text>

        {/* Quick actions */}
        <text x="20" y="175" fontSize="12" fontWeight="bold" fill="#333">Quick Transfer</text>

        <rect x="15" y="190" width="80" height="70" fill="white" stroke="#e0e0e0" rx="8" rx="6" strokeWidth="1" />
        <circle cx="55" cy="210" r="16" fill="#10b981" opacity="0.2" />
        <text x="55" y="215" fontSize="14" textAnchor="middle">📤</text>
        <text x="55" y="250" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#333">Send</text>

        <rect x="105" y="190" width="80" height="70" fill="white" stroke="#e0e0e0" rx="8" strokeWidth="1" />
        <circle cx="145" cy="210" r="16" fill="#10b981" opacity="0.2" />
        <text x="145" y="215" fontSize="14" textAnchor="middle">📥</text>
        <text x="145" y="250" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#333">Request</text>

        <rect x="195" y="190" width="80" height="70" fill="white" stroke="#e0e0e0" rx="8" strokeWidth="1" />
        <circle cx="235" cy="210" r="16" fill="#10b981" opacity="0.2" />
        <text x="235" y="215" fontSize="14" textAnchor="middle">💳</text>
        <text x="235" y="250" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#333">Bills</text>

        {/* Bills */}
        <text x="20" y="290" fontSize="12" fontWeight="bold" fill="#333">Upcoming Bills</text>
        <rect x="15" y="305" width="250" height="40" fill="white" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <text x="25" y="325" fontSize="10" fontWeight="bold" fill="#333">Electricity</text>
        <text x="220" y="325" fontSize="10" fontWeight="bold" fill="#ef4444" textAnchor="end">₹2,450</text>
      </svg>,
    ],
    BLOCKCHAIN: [
      <svg key="blockchain-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#ffffff" />
        {/* Header */}
        <rect width="400" height="80" fill="#7c3aed" />
        <text x="20" y="50" fontSize="18" fontWeight="bold" fill="white">NFT Marketplace</text>

        {/* Event tickets */}
        <g opacity="0.9">
          <rect x="15" y="100" width="370" height="100" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="25" y="110" width="60" height="80" fill="#7c3aed" opacity="0.2" />
          <text x="100" y="130" fontSize="12" fontWeight="bold" fill="#333">Concert 2024 · June 15</text>
          <text x="100" y="150" fontSize="10" fill="#666">Mumbai · Ticket ID: 0x7a4f</text>
          <text x="100" y="170" fontSize="11" fontWeight="bold" fill="#7c3aed">2.5 ETH · In Stock: 245</text>
          <rect x="320" y="130" width="45" height="30" fill="#7c3aed" rx="4" />
          <text x="342.5" y="150" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">Buy</text>

          <rect x="15" y="220" width="370" height="100" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="25" y="230" width="60" height="80" fill="#8b5cf6" opacity="0.2" />
          <text x="100" y="250" fontSize="12" fontWeight="bold" fill="#333">Festival 2024 · July 4</text>
          <text x="100" y="270" fontSize="10" fill="#666">Delhi · Ticket ID: 0x2b9e</text>
          <text x="100" y="290" fontSize="11" fontWeight="bold" fill="#7c3aed">1.8 ETH · In Stock: 512</text>
          <rect x="320" y="250" width="45" height="30" fill="#7c3aed" rx="4" />
          <text x="342.5" y="270" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">Buy</text>
        </g>
      </svg>,
      <svg key="blockchain-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#ffffff" rx="16" />

        {/* Header */}
        <rect x="8" y="8" width="264" height="50" fill="#7c3aed" rx="12" />
        <text x="20" y="40" fontSize="14" fontWeight="bold" fill="white">My NFTs</text>

        {/* Owned tickets */}
        <text x="20" y="75" fontSize="11" fontWeight="bold" fill="#333">Your Collection (3)</text>

        <rect x="15" y="90" width="250" height="80" fill="#f8f9fa" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <rect x="25" y="100" width="50" height="60" fill="#7c3aed" opacity="0.2" />
        <text x="85" y="110" fontSize="10" fontWeight="bold" fill="#333">Concert #2451</text>
        <text x="85" y="128" fontSize="8" fill="#666">Owned since Jun 15</text>
        <text x="240" y="115" fontSize="9" fontWeight="bold" fill="#7c3aed" textAnchor="end">2.5 ETH</text>

        <rect x="15" y="185" width="250" height="80" fill="#f8f9fa" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <rect x="25" y="195" width="50" height="60" fill="#8b5cf6" opacity="0.2" />
        <text x="85" y="205" fontSize="10" fontWeight="bold" fill="#333">Festival #5624</text>
        <text x="85" y="223" fontSize="8" fill="#666">Owned since Jul 2</text>
        <text x="240" y="210" fontSize="9" fontWeight="bold" fill="#7c3aed" textAnchor="end">1.8 ETH</text>

        <rect x="15" y="280" width="250" height="80" fill="#f8f9fa" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <rect x="25" y="290" width="50" height="60" fill="#a78bfa" opacity="0.2" />
        <text x="85" y="300" fontSize="10" fontWeight="bold" fill="#333">Sports #8921</text>
        <text x="85" y="318" fontSize="8" fill="#666">Owned since Aug 5</text>
        <text x="240" y="305" fontSize="9" fontWeight="bold" fill="#7c3aed" textAnchor="end">3.2 ETH</text>

        <rect x="15" y="420" width="250" height="35" rx="4" fill="#7c3aed" />
        <text x="140" y="442" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">List for Sale</text>
      </svg>,
    ],
    TRADING: [
      <svg key="trading-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#0f172a" />
        {/* Header */}
        <rect width="400" height="60" fill="#1e293b" />
        <text x="20" y="40" fontSize="16" fontWeight="bold" fill="white">Market Terminal</text>

        {/* Watchlist */}
        <text x="20" y="90" fontSize="11" fontWeight="bold" fill="#94a3b8">Top Movers</text>

        <g opacity="0.9">
          <rect x="15" y="105" width="370" height="50" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="6" />
          <text x="25" y="125" fontSize="11" fill="white" fontWeight="bold">NIFTY50</text>
          <text x="25" y="145" fontSize="10" fill="#94a3b8">Index</text>
          <text x="360" y="125" fontSize="12" fill="#10b981" fontWeight="bold" textAnchor="end">19,450 ↑ 1.2%</text>

          <rect x="15" y="170" width="370" height="50" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="6" />
          <text x="25" y="190" fontSize="11" fill="white" fontWeight="bold">BANKNIFTY</text>
          <text x="25" y="210" fontSize="10" fill="#94a3b8">Banking Index</text>
          <text x="360" y="190" fontSize="12" fill="#10b981" fontWeight="bold" textAnchor="end">44,230 ↑ 0.8%</text>

          <rect x="15" y="235" width="370" height="50" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="6" />
          <text x="25" y="255" fontSize="11" fill="white" fontWeight="bold">SENSEX</text>
          <text x="25" y="275" fontSize="10" fill="#94a3b8">Market Index</text>
          <text x="360" y="255" fontSize="12" fill="#ef4444" fontWeight="bold" textAnchor="end">63,420 ↓ 0.3%</text>

          <rect x="15" y="300" width="370" height="50" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="6" />
          <text x="25" y="320" fontSize="11" fill="white" fontWeight="bold">RELIANCE</text>
          <text x="25" y="340" fontSize="10" fill="#94a3b8">Stock</text>
          <text x="360" y="320" fontSize="12" fill="#10b981" fontWeight="bold" textAnchor="end">2,445 ↑ 2.1%</text>
        </g>
      </svg>,
      <svg key="trading-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#0f172a" rx="16" />

        {/* P&L */}
        <rect x="15" y="20" width="250" height="70" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="8" />
        <text x="25" y="40" fontSize="10" fill="#94a3b8">Portfolio P&L</text>
        <text x="25" y="65" fontSize="20" fontWeight="bold" fill="#10b981">+₹45,320</text>

        {/* Chart area */}
        <rect x="15" y="105" width="250" height="120" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="8" />
        <text x="25" y="125" fontSize="10" fill="#94a3b8">NIFTY50 Chart</text>

        {/* Candlesticks */}
        <line x1="40" y1="170" x2="40" y2="130" stroke="#10b981" strokeWidth="2" />
        <rect x="35" y="150" width="10" height="20" fill="#10b981" opacity="0.7" />

        <line x1="65" y1="175" x2="65" y2="120" stroke="#10b981" strokeWidth="2" />
        <rect x="60" y="140" width="10" height="25" fill="#10b981" opacity="0.7" />

        <line x1="90" y1="180" x2="90" y2="110" stroke="#10b981" strokeWidth="2" />
        <rect x="85" y="130" width="10" height="30" fill="#10b981" opacity="0.7" />

        <line x1="115" y1="165" x2="115" y2="135" stroke="#ef4444" strokeWidth="2" />
        <rect x="110" y="145" width="10" height="15" fill="#ef4444" opacity="0.7" />

        <line x1="140" y1="170" x2="140" y2="125" stroke="#10b981" strokeWidth="2" />
        <rect x="135" y="135" width="10" height="25" fill="#10b981" opacity="0.7" />

        {/* Stats */}
        <rect x="15" y="240" width="250" height="90" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="8" />
        <text x="25" y="265" fontSize="10" fill="#94a3b8">Win Rate</text>
        <text x="25" y="285" fontSize="16" fontWeight="bold" fill="#10b981">68% (17/25)</text>

        <text x="160" y="265" fontSize="10" fill="#94a3b8">Positions</text>
        <text x="160" y="285" fontSize="16" fontWeight="bold" fill="white">12 Active</text>

        {/* Action button */}
        <rect x="20" y="420" width="240" height="35" rx="4" fill="#3b82f6" />
        <text x="140" y="442" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">Place Trade</text>
      </svg>,
    ],
    DEVOPS: [
      <svg key="devops-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#1a1a1a" />
        {/* Header */}
        <rect width="400" height="60" fill="#111111" />
        <text x="20" y="40" fontSize="16" fontWeight="bold" fill="#f97316">CI/CD Dashboard</text>

        {/* Pipeline */}
        <text x="20" y="90" fontSize="11" fontWeight="bold" fill="#d4d4d8">Current Deployment</text>

        <g>
          <rect x="15" y="110" width="85" height="70" fill="#374151" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="57.5" y="135" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">BUILD</text>
          <text x="57.5" y="155" fontSize="9" fill="#10b981" textAnchor="middle">✓ Success</text>

          <line x1="100" y1="145" x2="115" y2="145" stroke="#10b981" strokeWidth="2" />

          <rect x="115" y="110" width="85" height="70" fill="#374151" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="157.5" y="135" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">TEST</text>
          <text x="157.5" y="155" fontSize="9" fill="#10b981" textAnchor="middle">✓ Passing</text>

          <line x1="200" y1="145" x2="215" y2="145" stroke="#10b981" strokeWidth="2" />

          <rect x="215" y="110" width="85" height="70" fill="#374151" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="257.5" y="135" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">DEPLOY</text>
          <text x="257.5" y="155" fontSize="9" fill="#10b981" textAnchor="middle">✓ Live</text>

          <line x1="300" y1="145" x2="315" y2="145" stroke="#10b981" strokeWidth="2" />

          <rect x="315" y="110" width="70" height="70" fill="#374151" stroke="#10b981" strokeWidth="2" rx="6" />
          <text x="350" y="135" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">MONITOR</text>
          <text x="350" y="155" fontSize="9" fill="#10b981" textAnchor="middle">✓ OK</text>
        </g>

        {/* Metrics */}
        <g>
          <rect x="15" y="220" width="185" height="80" fill="#374151" stroke="#ef4444" strokeWidth="1" rx="6" />
          <text x="30" y="240" fontSize="10" fill="#f97316" fontWeight="bold">Deployments</text>
          <text x="30" y="270" fontSize="20" fill="white" fontWeight="bold">24</text>

          <rect x="210" y="220" width="185" height="80" fill="#374151" stroke="#10b981" strokeWidth="1" rx="6" />
          <text x="225" y="240" fontSize="10" fill="#f97316" fontWeight="bold">Success Rate</text>
          <text x="225" y="270" fontSize="20" fill="#10b981" fontWeight="bold">98.5%</text>
        </g>
      </svg>,
      <svg key="devops-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#1a1a1a" rx="16" />

        {/* Status */}
        <rect x="15" y="20" width="250" height="60" fill="#374151" stroke="#10b981" strokeWidth="2" rx="8" />
        <text x="25" y="40" fontSize="10" fill="#f97316">System Status</text>
        <text x="25" y="60" fontSize="14" fontWeight="bold" fill="#10b981">✓ All Systems Healthy</text>

        {/* Recent builds */}
        <text x="20" y="105" fontSize="11" fontWeight="bold" fill="#d4d4d8">Recent Builds</text>

        <rect x="15" y="120" width="250" height="50" fill="#374151" stroke="#10b981" strokeWidth="1" rx="6" />
        <text x="25" y="140" fontSize="10" fontWeight="bold" fill="white">API Service Deployment</text>
        <text x="25" y="158" fontSize="9" fill="#94a3b8">Completed 5 mins ago</text>

        <rect x="15" y="185" width="250" height="50" fill="#374151" stroke="#10b981" strokeWidth="1" rx="6" />
        <text x="25" y="205" fontSize="10" fontWeight="bold" fill="white">Frontend Deploy v2.1.0</text>
        <text x="25" y="223" fontSize="9" fill="#94a3b8">Completed 15 mins ago</text>

        <rect x="15" y="250" width="250" height="50" fill="#374151" stroke="#10b981" strokeWidth="1" rx="6" />
        <text x="25" y="270" fontSize="10" fontWeight="bold" fill="white">Database Migration</text>
        <text x="25" y="288" fontSize="9" fill="#94a3b8">Completed 2 hours ago</text>

        <rect x="20" y="420" width="240" height="35" rx="4" fill="#f97316" />
        <text x="140" y="442" fontSize="10" fill="#000" textAnchor="middle" fontWeight="bold">View Full Logs</text>
      </svg>,
    ],
    HEALTHCARE: [
      <svg key="health-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#f0fdf4" />
        {/* Header */}
        <rect width="400" height="80" fill="#0d9488" />
        <text x="20" y="50" fontSize="18" fontWeight="bold" fill="white">Health Profile</text>

        {/* Medications */}
        <text x="20" y="120" fontSize="12" fontWeight="bold" fill="#0f766e">Current Medications</text>

        <g opacity="0.9">
          <rect x="15" y="135" width="370" height="75" fill="white" stroke="#d1fae5" strokeWidth="1" rx="6" />
          <circle cx="35" cy="172.5" r="18" fill="#10b981" opacity="0.2" />
          <text x="35" y="177" fontSize="14" textAnchor="middle" fontWeight="bold">💊</text>
          <text x="65" y="155" fontSize="12" fontWeight="bold" fill="#0f766e">Metformin</text>
          <text x="65" y="175" fontSize="10" fill="#0f766e">500mg • 2x Daily • Advised</text>
          <text x="360" y="170" fontSize="11" fontWeight="bold" fill="#0d9488" textAnchor="end">Next: 2 PM</text>

          <rect x="15" y="225" width="370" height="75" fill="white" stroke="#d1fae5" strokeWidth="1" rx="6" />
          <circle cx="35" cy="262.5" r="18" fill="#10b981" opacity="0.2" />
          <text x="35" y="267" fontSize="14" textAnchor="middle" fontWeight="bold">💊</text>
          <text x="65" y="245" fontSize="12" fontWeight="bold" fill="#0f766e">Aspirin</text>
          <text x="65" y="265" fontSize="10" fill="#0f766e">100mg • 1x Daily • Evening</text>
          <text x="360" y="260" fontSize="11" fontWeight="bold" fill="#0d9488" textAnchor="end">Next: 8 PM</text>

          <rect x="15" y="315" width="370" height="75" fill="white" stroke="#d1fae5" strokeWidth="1" rx="6" />
          <circle cx="35" cy="352.5" r="18" fill="#10b981" opacity="0.2" />
          <text x="35" y="357" fontSize="14" textAnchor="middle" fontWeight="bold">💊</text>
          <text x="65" y="335" fontSize="12" fontWeight="bold" fill="#0f766e">Vitamin D</text>
          <text x="65" y="355" fontSize="10" fill="#0f766e">1000IU • Daily • Morning</text>
          <text x="360" y="350" fontSize="11" fontWeight="bold" fill="#0d9488" textAnchor="end">Next: 9 AM</text>
        </g>
      </svg>,
      <svg key="health-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#f0fdf4" rx="16" />

        {/* Health metrics */}
        <text x="20" y="30" fontSize="12" fontWeight="bold" fill="#0f766e">Today's Vitals</text>

        <rect x="15" y="45" width="120" height="90" fill="white" stroke="#d1fae5" strokeWidth="2" rx="8" />
        <text x="75" y="65" fontSize="10" textAnchor="middle" fill="#0d9488" fontWeight="bold">Blood Pressure</text>
        <text x="75" y="90" fontSize="16" textAnchor="middle" fontWeight="bold" fill="#0f766e">120/80</text>
        <text x="75" y="110" fontSize="9" textAnchor="middle" fill="#666">Normal</text>

        <rect x="145" y="45" width="120" height="90" fill="white" stroke="#d1fae5" strokeWidth="2" rx="8" />
        <text x="205" y="65" fontSize="10" textAnchor="middle" fill="#0d9488" fontWeight="bold">Blood Sugar</text>
        <text x="205" y="90" fontSize="16" textAnchor="middle" fontWeight="bold" fill="#0f766e">95 mg/dL</text>
        <text x="205" y="110" fontSize="9" textAnchor="middle" fill="#666">Optimal</text>

        {/* Upcoming doses */}
        <text x="20" y="160" fontSize="12" fontWeight="bold" fill="#0f766e">Today's Schedule</text>

        <rect x="15" y="175" width="250" height="50" fill="white" stroke="#d1fae5" strokeWidth="1" rx="6" />
        <circle cx="32" cy="200" r="8" fill="#10b981" opacity="0.3" />
        <text x="50" y="195" fontSize="10" fontWeight="bold" fill="#0f766e">Metformin - 2:00 PM</text>
        <text x="50" y="210" fontSize="9" fill="#666">Take with food</text>

        <rect x="15" y="240" width="250" height="50" fill="white" stroke="#d1fae5" strokeWidth="1" rx="6" />
        <circle cx="32" cy="265" r="8" fill="#fbbf24" opacity="0.3" />
        <text x="50" y="260" fontSize="10" fontWeight="bold" fill="#0f766e">Aspirin - 8:00 PM</text>
        <text x="50" y="275" fontSize="9" fill="#666">Single tablet</text>

        <rect x="20" y="420" width="240" height="35" rx="4" fill="#0d9488" />
        <text x="140" y="442" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">Log Vitals</text>
      </svg>,
    ],
    MARKETPLACE: [
      <svg key="market-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#ffffff" />
        {/* Header */}
        <rect width="400" height="80" fill="#4f46e5" />
        <text x="20" y="50" fontSize="18" fontWeight="bold" fill="white">Talent Search</text>

        {/* Candidates */}
        <g opacity="0.9">
          <rect x="15" y="100" width="370" height="100" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="50" cy="150" r="24" fill="#d1d5db" />
          <text x="50" y="156" fontSize="20" textAnchor="middle">👨‍💼</text>
          <text x="90" y="130" fontSize="12" fontWeight="bold" fill="#333">Arun Kumar</text>
          <text x="90" y="150" fontSize="10" fill="#666">Senior Backend Dev • 8 yrs exp</text>
          <text x="90" y="168" fontSize="9" fill="#4f46e5" fontWeight="bold">⭐⭐⭐⭐⭐ • Verified</text>
          <rect x="320" y="135" width="50" height="30" fill="#4f46e5" rx="4" />
          <text x="345" y="153" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">View</text>

          <rect x="15" y="220" width="370" height="100" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="50" cy="270" r="24" fill="#d1d5db" />
          <text x="50" y="276" fontSize="20" textAnchor="middle">👩‍💼</text>
          <text x="90" y="250" fontSize="12" fontWeight="bold" fill="#333">Priya Singh</text>
          <text x="90" y="270" fontSize="10" fill="#666">Full Stack Engineer • 6 yrs exp</text>
          <text x="90" y="288" fontSize="9" fill="#4f46e5" fontWeight="bold">⭐⭐⭐⭐⭐ • Verified</text>
          <rect x="320" y="255" width="50" height="30" fill="#4f46e5" rx="4" />
          <text x="345" y="273" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">View</text>

          <rect x="15" y="340" width="370" height="100" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="50" cy="390" r="24" fill="#d1d5db" />
          <text x="50" y="396" fontSize="20" textAnchor="middle">👨‍💻</text>
          <text x="90" y="370" fontSize="12" fontWeight="bold" fill="#333">Rajesh Patel</text>
          <text x="90" y="390" fontSize="10" fill="#666">DevOps Engineer • 9 yrs exp</text>
          <text x="90" y="408" fontSize="9" fill="#4f46e5" fontWeight="bold">⭐⭐⭐⭐⭐ • Verified</text>
          <rect x="320" y="375" width="50" height="30" fill="#4f46e5" rx="4" />
          <text x="345" y="393" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">View</text>
        </g>
      </svg>,
      <svg key="market-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#ffffff" rx="16" />

        {/* Profile */}
        <rect x="15" y="20" width="250" height="80" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="1" rx="8" />
        <circle cx="50" cy="60" r="20" fill="#d1d5db" />
        <text x="50" y="66" fontSize="16" textAnchor="middle">👨‍💼</text>
        <text x="80" y="45" fontSize="11" fontWeight="bold" fill="#333">Arun Kumar</text>
        <text x="80" y="62" fontSize="9" fill="#666">Senior Backend Dev</text>
        <text x="240" y="55" fontSize="9" fill="#4f46e5" fontWeight="bold" textAnchor="end">⭐⭐⭐⭐⭐</text>

        {/* Skills */}
        <text x="20" y="125" fontSize="11" fontWeight="bold" fill="#333">Top Skills</text>

        <rect x="15" y="140" width="73" height="35" fill="#f3f4f6" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <text x="51.5" y="163" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#333">Node.js</text>

        <rect x="102" y="140" width="73" height="35" fill="#f3f4f6" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <text x="138.5" y="163" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#333">Python</text>

        <rect x="189" y="140" width="76" height="35" fill="#f3f4f6" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <text x="227" y="163" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#333">PostgreSQL</text>

        {/* Experience */}
        <text x="20" y="200" fontSize="11" fontWeight="bold" fill="#333">Experience</text>

        <rect x="15" y="215" width="250" height="50" fill="#f3f4f6" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <text x="25" y="235" fontSize="10" fontWeight="bold" fill="#333">TechCorp (Freelance)</text>
        <text x="25" y="252" fontSize="9" fill="#666">Lead Developer • 3 years</text>

        <rect x="20" y="420" width="240" height="35" rx="4" fill="#4f46e5" />
        <text x="140" y="442" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">Send Message</text>
      </svg>,
    ],
    ANALYTICS: [
      <svg key="analytics-1" viewBox="0 0 400 500" className="w-full h-auto">
        <rect width="400" height="500" fill="#f8f9fa" />
        {/* Header */}
        <rect width="400" height="80" fill="#6b7280" />
        <text x="20" y="50" fontSize="18" fontWeight="bold" fill="white">Analytics Platform</text>

        {/* Upload section */}
        <rect x="20" y="100" width="360" height="80" fill="white" stroke="#d1d5db" strokeWidth="2" rx="8" />
        <text x="35" y="125" fontSize="12" fontWeight="bold" fill="#333">Upload Your Data</text>
        <text x="35" y="145" fontSize="10" fill="#666">CSV, XLSX, or PDF files</text>
        <rect x="35" y="155" width="160" height="40" rx="4" fill="#6b7280" />
        <text x="115" y="180" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">Choose File</text>

        {/* Results */}
        <text x="20" y="220" fontSize="12" fontWeight="bold" fill="#333">Recent Analysis</text>

        <rect x="20" y="235" width="360" height="120" fill="white" stroke="#e0e0e0" rx="8" strokeWidth="1" />
        <text x="35" y="255" fontSize="11" fontWeight="bold" fill="#333">Sales Distribution</text>

        {/* Bar chart */}
        <rect x="40" y="275" width="22" height="60" fill="#6b7280" opacity="0.7" />
        <rect x="75" y="260" width="22" height="75" fill="#6b7280" opacity="0.8" />
        <rect x="110" y="270" width="22" height="65" fill="#6b7280" opacity="0.75" />
        <rect x="145" y="250" width="22" height="85" fill="#6b7280" opacity="0.9" />
        <rect x="180" y="280" width="22" height="55" fill="#6b7280" opacity="0.65" />
        <rect x="215" y="290" width="22" height="45" fill="#6b7280" opacity="0.6" />
        <rect x="250" y="270" width="22" height="65" fill="#6b7280" opacity="0.75" />

        {/* Summary */}
        <text x="20" y="400" fontSize="11" fontWeight="bold" fill="#333">Summary: 2,450 records analyzed • Avg value: ₹1,234</text>
      </svg>,
      <svg key="analytics-2" viewBox="0 0 280 500" className="w-full h-auto">
        {/* Phone frame */}
        <rect width="280" height="500" fill="#000" rx="20" strokeWidth="8" stroke="#333" />
        <rect x="8" y="8" width="264" height="484" fill="#f8f9fa" rx="16" />

        {/* Query interface */}
        <text x="20" y="30" fontSize="11" fontWeight="bold" fill="#333">Ask Questions</text>

        <rect x="15" y="45" width="250" height="40" fill="white" stroke="#d1d5db" strokeWidth="1" rx="6" />
        <text x="25" y="72" fontSize="10" fill="#999">What is the average by category?</text>

        {/* Answer */}
        <rect x="15" y="100" width="250" height="80" fill="white" stroke="#e0e0e0" strokeWidth="1" rx="6" />
        <text x="25" y="120" fontSize="10" fontWeight="bold" fill="#333">Answer:</text>
        <text x="25" y="140" fontSize="9" fill="#666">Category A: ₹234.5</text>
        <text x="25" y="156" fontSize="9" fill="#666">Category B: ₹187.2</text>
        <text x="25" y="172" fontSize="9" fill="#666">Category C: ₹312.8</text>

        {/* Suggestions */}
        <text x="20" y="210" fontSize="11" fontWeight="bold" fill="#333">Quick Analysis</text>

        <rect x="15" y="225" width="250" height="40" fill="#f3f4f6" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <text x="25" y="251" fontSize="9" fontWeight="bold" fill="#333">Top 5 products by sales</text>

        <rect x="15" y="275" width="250" height="40" fill="#f3f4f6" stroke="#e0e0e0" rx="6" strokeWidth="1" />
        <text x="25" y="301" fontSize="9" fontWeight="bold" fill="#333">Revenue trend (last 30 days)</text>

        <rect x="20" y="420" width="240" height="35" rx="4" fill="#6b7280" />
        <text x="140" y="442" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">New Analysis</text>
      </svg>,
    ],
  };

  return screenshots[domainTag] || screenshots.ANALYTICS;
}

export default function CaseStudyScreenshots({ domainTag, className = "" }: CaseStudyScreenshotsProps) {
  const [screenshot1, screenshot2] = getScreenshots(domainTag);
  return <>{screenshot1}</>;
}
