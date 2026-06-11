interface CaseStudyScreenshotProps {
  domainTag: string;
  title?: string;
  className?: string;
}

export default function CaseStudyScreenshot({ domainTag, title = "", className = "" }: CaseStudyScreenshotProps) {
  const screenshots: Record<string, JSX.Element> = {
    RESTAURANT: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 restaurant-order.vercel.app</text>

        {/* Page content - Restaurant Ordering */}
        <rect x="0" y="70" width="800" height="530" fill="#ffffff" />

        {/* Header */}
        <rect x="0" y="70" width="800" height="120" fill="#f97316" />
        <text x="40" y="120" fontSize="32" fontWeight="bold" fill="white">Rajesh's Restaurant</text>
        <text x="40" y="150" fontSize="14" fill="white">Fresh • Authentic • Delicious</text>

        {/* Menu items grid */}
        <g>
          {/* Item 1 */}
          <rect x="30" y="210" width="200" height="280" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="30" y="210" width="200" height="120" fill="#ffb347" rx="8" />
          <text x="50" y="380" fontSize="14" fontWeight="bold" fill="#333">Butter Chicken</text>
          <text x="50" y="400" fontSize="12" fill="#666">Classic curry</text>
          <text x="50" y="425" fontSize="12" fill="#f97316" fontWeight="bold">₹350</text>
          <rect x="50" y="440" width="160" height="35" rx="4" fill="#f97316" />
          <text x="100" y="463" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Add to Cart</text>

          {/* Item 2 */}
          <rect x="250" y="210" width="200" height="280" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="250" y="210" width="200" height="120" fill="#ffa500" rx="8" />
          <text x="270" y="380" fontSize="14" fontWeight="bold" fill="#333">Tandoori Chicken</text>
          <text x="270" y="400" fontSize="12" fill="#666">Smoky & spiced</text>
          <text x="270" y="425" fontSize="12" fill="#f97316" fontWeight="bold">₹450</text>
          <rect x="270" y="440" width="160" height="35" rx="4" fill="#f97316" />
          <text x="320" y="463" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Add to Cart</text>

          {/* Item 3 */}
          <rect x="470" y="210" width="200" height="280" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="470" y="210" width="200" height="120" fill="#ff8c42" rx="8" />
          <text x="490" y="380" fontSize="14" fontWeight="bold" fill="#333">Biryani Rice</text>
          <text x="490" y="400" fontSize="12" fill="#666">Fragrant basmati</text>
          <text x="490" y="425" fontSize="12" fill="#f97316" fontWeight="bold">₹280</text>
          <rect x="490" y="440" width="160" height="35" rx="4" fill="#f97316" />
          <text x="540" y="463" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Add to Cart</text>
        </g>

        {/* Booking button */}
        <rect x="30" y="510" width="740" height="50" rx="4" fill="#1e40af" />
        <text x="400" y="542" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Book a Table</text>
      </svg>
    ),
    SALON: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 glam-salon.vercel.app</text>

        {/* Page content - Salon Booking */}
        <rect x="0" y="70" width="800" height="530" fill="#ffffff" />

        {/* Header */}
        <rect x="0" y="70" width="800" height="100" fill="#ec4899" />
        <text x="40" y="130" fontSize="32" fontWeight="bold" fill="white">Glam Salon</text>

        {/* Stylist cards */}
        <g>
          {/* Stylist 1 */}
          <rect x="30" y="190" width="230" height="300" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="145" cy="250" r="45" fill="#d1d5db" />
          <text x="145" y="255" fontSize="32" textAnchor="middle">👩</text>
          <text x="145" y="310" fontSize="14" fontWeight="bold" fill="#333" textAnchor="middle">Priya</text>
          <text x="145" y="330" fontSize="12" fill="#666" textAnchor="middle">Hair Specialist</text>
          <text x="145" y="365" fontSize="12" fill="#ec4899" fontWeight="bold" textAnchor="middle">⭐⭐⭐⭐⭐</text>
          <rect x="50" y="385" width="170" height="40" rx="4" fill="#ec4899" />
          <text x="135" y="410" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Book Now</text>

          {/* Stylist 2 */}
          <rect x="280" y="190" width="230" height="300" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="395" cy="250" r="45" fill="#d1d5db" />
          <text x="395" y="255" fontSize="32" textAnchor="middle">👨</text>
          <text x="395" y="310" fontSize="14" fontWeight="bold" fill="#333" textAnchor="middle">Arjun</text>
          <text x="395" y="330" fontSize="12" fill="#666" textAnchor="middle">Styling Expert</text>
          <text x="395" y="365" fontSize="12" fill="#ec4899" fontWeight="bold" textAnchor="middle">⭐⭐⭐⭐⭐</text>
          <rect x="300" y="385" width="170" height="40" rx="4" fill="#ec4899" />
          <text x="385" y="410" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Book Now</text>

          {/* Stylist 3 */}
          <rect x="530" y="190" width="230" height="300" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="645" cy="250" r="45" fill="#d1d5db" />
          <text x="645" y="255" fontSize="32" textAnchor="middle">👩</text>
          <text x="645" y="310" fontSize="14" fontWeight="bold" fill="#333" textAnchor="middle">Zara</text>
          <text x="645" y="330" fontSize="12" fill="#666" textAnchor="middle">Color Expert</text>
          <text x="645" y="365" fontSize="12" fill="#ec4899" fontWeight="bold" textAnchor="middle">⭐⭐⭐⭐⭐</text>
          <rect x="550" y="385" width="170" height="40" rx="4" fill="#ec4899" />
          <text x="635" y="410" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Book Now</text>
        </g>
      </svg>
    ),
    FINTECH: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 fintech-dashboard.app</text>

        {/* Page content - Fintech Dashboard */}
        <rect x="0" y="70" width="800" height="530" fill="#f8f9fa" />

        {/* Sidebar */}
        <rect x="0" y="70" width="200" height="530" fill="#1e293b" />
        <text x="20" y="110" fontSize="14" fontWeight="bold" fill="white">Dashboard</text>
        <text x="20" y="145" fontSize="12" fill="#94a3b8">Transactions</text>
        <text x="20" y="170" fontSize="12" fill="#94a3b8">Accounts</text>
        <text x="20" y="195" fontSize="12" fill="#10b981">Analytics</text>
        <text x="20" y="220" fontSize="12" fill="#94a3b8">Settings</text>

        {/* Main content */}
        {/* Balance card */}
        <rect x="220" y="90" width="560" height="100" rx="8" fill="#10b981" />
        <text x="240" y="115" fontSize="12" fill="#d1fae5">Total Balance</text>
        <text x="240" y="145" fontSize="32" fontWeight="bold" fill="white">₹24,50,000</text>
        <text x="240" y="170" fontSize="12" fill="#d1fae5">Updated 2 mins ago</text>

        {/* Transaction list */}
        <rect x="220" y="210" width="560" height="300" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <text x="240" y="240" fontSize="14" fontWeight="bold" fill="#1e293b">Recent Transactions</text>

        {/* Transaction items */}
        <line x1="220" y1="255" x2="780" y2="255" stroke="#e2e8f0" strokeWidth="1" />
        <text x="240" y="280" fontSize="12" fill="#475569">→ Payment to Vendor</text>
        <text x="600" y="280" fontSize="12" fill="#ef4444" fontWeight="bold">-₹50,000</text>

        <line x1="220" y1="295" x2="780" y2="295" stroke="#e2e8f0" strokeWidth="1" />
        <text x="240" y="320" fontSize="12" fill="#475569">← Received from Client</text>
        <text x="600" y="320" fontSize="12" fill="#10b981" fontWeight="bold">+₹2,00,000</text>

        <line x1="220" y1="335" x2="780" y2="335" stroke="#e2e8f0" strokeWidth="1" />
        <text x="240" y="360" fontSize="12" fill="#475569">→ Transfer to Savings</text>
        <text x="600" y="360" fontSize="12" fill="#ef4444" fontWeight="bold">-₹1,00,000</text>

        <line x1="220" y1="375" x2="780" y2="375" stroke="#e2e8f0" strokeWidth="1" />
        <text x="240" y="400" fontSize="12" fill="#475569">← Investment Returns</text>
        <text x="600" y="400" fontSize="12" fill="#10b981" fontWeight="bold">+₹45,300</text>

        <line x1="220" y1="415" x2="780" y2="415" stroke="#e2e8f0" strokeWidth="1" />
        <text x="240" y="440" fontSize="12" fill="#475569">→ Bill Payment</text>
        <text x="600" y="440" fontSize="12" fill="#ef4444" fontWeight="bold">-₹25,000</text>
      </svg>
    ),
    BLOCKCHAIN: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 nft-tickets.eth</text>

        {/* Page content - NFT Marketplace */}
        <rect x="0" y="70" width="800" height="530" fill="#ffffff" />

        {/* Header */}
        <rect x="0" y="70" width="800" height="90" fill="#7c3aed" />
        <text x="40" y="125" fontSize="28" fontWeight="bold" fill="white">NFT Ticketing</text>

        {/* Event tickets */}
        <g>
          {/* Ticket 1 */}
          <rect x="30" y="180" width="230" height="330" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="30" y="180" width="230" height="100" fill="#7c3aed" />
          <text x="145" y="225" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Concert 2024</text>
          <text x="145" y="250" fontSize="12" fill="#d4d4d8" textAnchor="middle">June 15 • Mumbai</text>
          <text x="50" y="310" fontSize="12" fill="#333" fontWeight="bold">Event ID</text>
          <text x="50" y="328" fontSize="11" fill="#666">0x7a4f2e...9c1a</text>
          <text x="50" y="360" fontSize="12" fill="#333" fontWeight="bold">Floor Price</text>
          <text x="50" y="378" fontSize="14" fill="#7c3aed" fontWeight="bold">2.5 ETH</text>
          <rect x="50" y="400" width="170" height="35" rx="4" fill="#7c3aed" />
          <text x="135" y="423" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Buy Now</text>

          {/* Ticket 2 */}
          <rect x="280" y="180" width="230" height="330" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="280" y="180" width="230" height="100" fill="#8b5cf6" />
          <text x="395" y="225" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Festival 2024</text>
          <text x="395" y="250" fontSize="12" fill="#d4d4d8" textAnchor="middle">July 4 • Delhi</text>
          <text x="300" y="310" fontSize="12" fill="#333" fontWeight="bold">Event ID</text>
          <text x="300" y="328" fontSize="11" fill="#666">0x2b9e3f...5d8c</text>
          <text x="300" y="360" fontSize="12" fill="#333" fontWeight="bold">Floor Price</text>
          <text x="300" y="378" fontSize="14" fill="#7c3aed" fontWeight="bold">1.8 ETH</text>
          <rect x="300" y="400" width="170" height="35" rx="4" fill="#7c3aed" />
          <text x="385" y="423" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Buy Now</text>

          {/* Ticket 3 */}
          <rect x="530" y="180" width="230" height="330" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <rect x="530" y="180" width="230" height="100" fill="#a78bfa" />
          <text x="645" y="225" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Sports 2024</text>
          <text x="645" y="250" fontSize="12" fill="#d4d4d8" textAnchor="middle">Aug 10 • Bangalore</text>
          <text x="550" y="310" fontSize="12" fill="#333" fontWeight="bold">Event ID</text>
          <text x="550" y="328" fontSize="11" fill="#666">0x5c1b4a...2e9f</text>
          <text x="550" y="360" fontSize="12" fill="#333" fontWeight="bold">Floor Price</text>
          <text x="550" y="378" fontSize="14" fill="#7c3aed" fontWeight="bold">3.2 ETH</text>
          <rect x="550" y="400" width="170" height="35" rx="4" fill="#7c3aed" />
          <text x="635" y="423" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Buy Now</text>
        </g>
      </svg>
    ),
    TRADING: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 trading-terminal.app</text>

        {/* Page content */}
        <rect x="0" y="70" width="800" height="530" fill="#0f172a" />

        {/* Watchlist */}
        <rect x="20" y="90" width="250" height="500" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="8" />
        <text x="40" y="115" fontSize="12" fontWeight="bold" fill="white">Watchlist</text>

        <line x1="20" y1="130" x2="270" y2="130" stroke="#334155" strokeWidth="1" />
        <text x="40" y="155" fontSize="12" fill="#94a3b8">NIFTY50</text>
        <text x="220" y="155" fontSize="12" fill="#10b981" textAnchor="end" fontWeight="bold">19,450 ↑</text>

        <text x="40" y="185" fontSize="12" fill="#94a3b8">BANKNIFTY</text>
        <text x="220" y="185" fontSize="12" fill="#10b981" textAnchor="end" fontWeight="bold">44,230 ↑</text>

        <text x="40" y="215" fontSize="12" fill="#94a3b8">SENSEX</text>
        <text x="220" y="215" fontSize="12" fill="#ef4444" textAnchor="end" fontWeight="bold">63,420 ↓</text>

        {/* Chart area */}
        <rect x="290" y="90" width="480" height="320" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="8" />
        <text x="310" y="115" fontSize="12" fontWeight="bold" fill="white">NIFTY50 - 1H</text>

        {/* Candlestick chart */}
        <line x1="330" y1="250" x2="330" y2="150" stroke="#10b981" strokeWidth="3" />
        <rect x="320" y="180" width="20" height="40" fill="#10b981" opacity="0.6" />

        <line x1="380" y1="260" x2="380" y2="140" stroke="#10b981" strokeWidth="3" />
        <rect x="370" y="170" width="20" height="50" fill="#10b981" opacity="0.6" />

        <line x1="430" y1="270" x2="430" y2="130" stroke="#10b981" strokeWidth="3" />
        <rect x="420" y="160" width="20" height="60" fill="#10b981" opacity="0.6" />

        <line x1="480" y1="240" x2="480" y2="160" stroke="#ef4444" strokeWidth="3" />
        <rect x="470" y="190" width="20" height="30" fill="#ef4444" opacity="0.6" />

        <line x1="530" y1="220" x2="530" y2="170" stroke="#10b981" strokeWidth="3" />
        <rect x="520" y="175" width="20" height="35" fill="#10b981" opacity="0.6" />

        <line x1="580" y1="210" x2="580" y2="180" stroke="#10b981" strokeWidth="3" />
        <rect x="570" y="185" width="20" height="20" fill="#10b981" opacity="0.6" />

        <line x1="630" y1="200" x2="630" y2="140" stroke="#10b981" strokeWidth="3" />
        <rect x="620" y="160" width="20" height="35" fill="#10b981" opacity="0.6" />

        {/* Stats */}
        <rect x="290" y="430" width="480" height="90" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="8" />
        <text x="310" y="455" fontSize="11" fill="#94a3b8">P&L</text>
        <text x="310" y="475" fontSize="18" fill="#10b981" fontWeight="bold">+₹45,320</text>

        <text x="500" y="455" fontSize="11" fill="#94a3b8">Win Rate</text>
        <text x="500" y="475" fontSize="18" fill="#10b981" fontWeight="bold">68%</text>

        <text x="650" y="455" fontSize="11" fill="#94a3b8">Positions</text>
        <text x="650" y="475" fontSize="18" fill="white" fontWeight="bold">12</text>
      </svg>
    ),
    DEVOPS: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 ci-dashboard.aws</text>

        {/* Page content - DevOps Dashboard */}
        <rect x="0" y="70" width="800" height="530" fill="#1a1a1a" />

        {/* Header */}
        <rect x="0" y="70" width="800" height="60" fill="#111111" />
        <text x="40" y="105" fontSize="18" fontWeight="bold" fill="#f97316">CI/CD Pipeline Dashboard</text>

        {/* Deployment pipeline */}
        <g>
          {/* Build stage */}
          <rect x="40" y="160" width="140" height="80" fill="#374151" stroke="#10b981" strokeWidth="2" rx="4" />
          <text x="110" y="190" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">BUILD</text>
          <text x="110" y="210" fontSize="12" fill="#10b981" textAnchor="middle">✓ Success</text>

          {/* Arrow */}
          <line x1="180" y1="200" x2="210" y2="200" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Test stage */}
          <rect x="210" y="160" width="140" height="80" fill="#374151" stroke="#10b981" strokeWidth="2" rx="4" />
          <text x="280" y="190" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">TEST</text>
          <text x="280" y="210" fontSize="12" fill="#10b981" textAnchor="middle">✓ Passing</text>

          {/* Arrow */}
          <line x1="350" y1="200" x2="380" y2="200" stroke="#10b981" strokeWidth="2" />

          {/* Deploy stage */}
          <rect x="380" y="160" width="140" height="80" fill="#374151" stroke="#10b981" strokeWidth="2" rx="4" />
          <text x="450" y="190" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">DEPLOY</text>
          <text x="450" y="210" fontSize="12" fill="#10b981" textAnchor="middle">✓ Live</text>

          {/* Arrow */}
          <line x1="520" y1="200" x2="550" y2="200" stroke="#10b981" strokeWidth="2" />

          {/* Monitor stage */}
          <rect x="550" y="160" width="140" height="80" fill="#374151" stroke="#10b981" strokeWidth="2" rx="4" />
          <text x="620" y="190" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">MONITOR</text>
          <text x="620" y="210" fontSize="12" fill="#10b981" textAnchor="middle">✓ Healthy</text>
        </g>

        {/* Metrics */}
        <rect x="40" y="280" width="170" height="130" fill="#374151" stroke="#ef4444" strokeWidth="1" rx="4" />
        <text x="60" y="305" fontSize="12" fill="#f97316" fontWeight="bold">Deployments</text>
        <text x="60" y="330" fontSize="24" fill="white" fontWeight="bold">24</text>
        <text x="60" y="350" fontSize="11" fill="#9ca3af">today</text>

        <rect x="220" y="280" width="170" height="130" fill="#374151" stroke="#10b981" strokeWidth="1" rx="4" />
        <text x="240" y="305" fontSize="12" fill="#f97316" fontWeight="bold">Success Rate</text>
        <text x="240" y="330" fontSize="24" fill="#10b981" fontWeight="bold">98.5%</text>
        <text x="240" y="350" fontSize="11" fill="#9ca3af">all builds</text>

        <rect x="400" y="280" width="170" height="130" fill="#374151" stroke="#3b82f6" strokeWidth="1" rx="4" />
        <text x="420" y="305" fontSize="12" fill="#f97316" fontWeight="bold">Avg Deploy Time</text>
        <text x="420" y="330" fontSize="24" fill="#3b82f6" fontWeight="bold">2m 15s</text>
        <text x="420" y="350" fontSize="11" fill="#9ca3af">zero downtime</text>

        <rect x="580" y="280" width="170" height="130" fill="#374151" stroke="#8b5cf6" strokeWidth="1" rx="4" />
        <text x="600" y="305" fontSize="12" fill="#f97316" fontWeight="bold">Uptime</text>
        <text x="600" y="330" fontSize="24" fill="#8b5cf6" fontWeight="bold">99.99%</text>
        <text x="600" y="350" fontSize="11" fill="#9ca3af">this month</text>
      </svg>
    ),
    HEALTHCARE: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 medcare-app.health</text>

        {/* Page content - Healthcare App */}
        <rect x="0" y="70" width="800" height="530" fill="#f0fdf4" />

        {/* Header */}
        <rect x="0" y="70" width="800" height="80" fill="#0d9488" />
        <text x="40" y="120" fontSize="24" fontWeight="bold" fill="white">Your Health Profile</text>

        {/* Main content */}
        {/* Medication card */}
        <rect x="40" y="170" width="360" height="320" fill="white" stroke="#d1fae5" strokeWidth="2" rx="8" />
        <text x="60" y="200" fontSize="14" fontWeight="bold" fill="#0d9488">📋 Current Medications</text>

        <rect x="60" y="220" width="320" height="70" fill="#f0fdf4" stroke="#d1fae5" strokeWidth="1" rx="4" />
        <text x="75" y="245" fontSize="12" fontWeight="bold" fill="#0f766e">Metformin</text>
        <text x="75" y="265" fontSize="11" fill="#0f766e">500mg • 2x Daily • Before meals</text>
        <text x="280" y="265" fontSize="10" fill="#0d9488" fontWeight="bold">Next dose: 2:00 PM</text>

        <rect x="60" y="310" width="320" height="70" fill="#f0fdf4" stroke="#d1fae5" strokeWidth="1" rx="4" />
        <text x="75" y="335" fontSize="12" fontWeight="bold" fill="#0f766e">Aspirin</text>
        <text x="75" y="355" fontSize="11" fill="#0f766e">100mg • 1x Daily • Evening</text>
        <text x="280" y="355" fontSize="10" fill="#0d9488" fontWeight="bold">Tomorrow: 8:00 PM</text>

        {/* Medical records card */}
        <rect x="420" y="170" width="360" height="320" fill="white" stroke="#d1fae5" strokeWidth="2" rx="8" />
        <text x="440" y="200" fontSize="14" fontWeight="bold" fill="#0d9488">📊 Medical Records</text>

        <rect x="440" y="220" width="320" height="50" fill="#f0fdf4" stroke="#d1fae5" strokeWidth="1" rx="4" />
        <text x="455" y="245" fontSize="11" fill="#0f766e">Blood Pressure: 120/80</text>
        <text x="455" y="260" fontSize="10" fill="#888">Last checked: 2 days ago</text>

        <rect x="440" y="290" width="320" height="50" fill="#f0fdf4" stroke="#d1fae5" strokeWidth="1" rx="4" />
        <text x="455" y="315" fontSize="11" fill="#0f766e">Blood Sugar: 95 mg/dL</text>
        <text x="455" y="330" fontSize="10" fill="#888">Last checked: Today</text>

        <rect x="440" y="360" width="320" height="50" fill="#f0fdf4" stroke="#d1fae5" strokeWidth="1" rx="4" />
        <text x="455" y="385" fontSize="11" fill="#0f766e">Weight: 72 kg</text>
        <text x="455" y="400" fontSize="10" fill="#888">Last checked: 1 week ago</text>
      </svg>
    ),
    MARKETPLACE: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 talentmatch-global.app</text>

        {/* Page content - Talent Marketplace */}
        <rect x="0" y="70" width="800" height="530" fill="#ffffff" />

        {/* Header */}
        <rect x="0" y="70" width="800" height="90" fill="#4f46e5" />
        <text x="40" y="130" fontSize="28" fontWeight="bold" fill="white">Find Top Talent</text>

        {/* Candidate profiles */}
        <g>
          {/* Card 1 */}
          <rect x="30" y="180" width="220" height="300" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="140" cy="220" r="35" fill="#d1d5db" />
          <text x="140" y="227" fontSize="28" textAnchor="middle">👨‍💼</text>
          <text x="140" y="280" fontSize="13" fontWeight="bold" fill="#333" textAnchor="middle">Arun Kumar</text>
          <text x="140" y="298" fontSize="11" fill="#666" textAnchor="middle">Senior Backend Dev</text>
          <text x="140" y="320" fontSize="11" fill="#4f46e5" textAnchor="middle">⭐ Verified</text>
          <rect x="50" y="340" width="180" height="35" rx="4" fill="#4f46e5" />
          <text x="140" y="363" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">View Profile</text>

          {/* Card 2 */}
          <rect x="280" y="180" width="220" height="300" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="390" cy="220" r="35" fill="#d1d5db" />
          <text x="390" y="227" fontSize="28" textAnchor="middle">👩‍💼</text>
          <text x="390" y="280" fontSize="13" fontWeight="bold" fill="#333" textAnchor="middle">Priya Singh</text>
          <text x="390" y="298" fontSize="11" fill="#666" textAnchor="middle">Full Stack Engineer</text>
          <text x="390" y="320" fontSize="11" fill="#4f46e5" textAnchor="middle">⭐⭐ Verified</text>
          <rect x="300" y="340" width="180" height="35" rx="4" fill="#4f46e5" />
          <text x="390" y="363" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">View Profile</text>

          {/* Card 3 */}
          <rect x="530" y="180" width="220" height="300" fill="#f8f9fa" stroke="#e0e0e0" rx="8" strokeWidth="1" />
          <circle cx="640" cy="220" r="35" fill="#d1d5db" />
          <text x="640" y="227" fontSize="28" textAnchor="middle">👨‍💻</text>
          <text x="640" y="280" fontSize="13" fontWeight="bold" fill="#333" textAnchor="middle">Rajesh Patel</text>
          <text x="640" y="298" fontSize="11" fill="#666" textAnchor="middle">DevOps Engineer</text>
          <text x="640" y="320" fontSize="11" fill="#4f46e5" textAnchor="middle">⭐⭐⭐ Verified</text>
          <rect x="550" y="340" width="180" height="35" rx="4" fill="#4f46e5" />
          <text x="640" y="363" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">View Profile</text>
        </g>
      </svg>
    ),
    ANALYTICS: (
      <svg viewBox="0 0 800 600" className={className}>
        {/* Browser chrome */}
        <rect width="800" height="600" fill="#f8f9fa" />
        <rect width="800" height="70" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />

        {/* Address bar */}
        <rect x="20" y="20" width="760" height="35" rx="4" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
        <text x="35" y="43" fontSize="12" fill="#666">🔒 analytics-platform.app</text>

        {/* Page content - Analytics Dashboard */}
        <rect x="0" y="70" width="800" height="530" fill="#f8f9fa" />

        {/* Header */}
        <rect x="0" y="70" width="800" height="80" fill="#6b7280" />
        <text x="40" y="130" fontSize="24" fontWeight="bold" fill="white">Data Analysis Platform</text>

        {/* Upload section */}
        <rect x="40" y="170" width="720" height="90" fill="white" stroke="#d1d5db" strokeWidth="2" rx="8" />
        <text x="60" y="200" fontSize="14" fontWeight="bold" fill="#333">Upload Your Data</text>
        <text x="60" y="220" fontSize="12" fill="#666">CSV, XLSX, or PDF files</text>
        <rect x="60" y="235" width="200" height="40" rx="4" fill="#6b7280" />
        <text x="160" y="262" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Choose File</text>

        {/* Analysis results */}
        <rect x="40" y="280" width="350" height="220" fill="white" stroke="#d1d5db" strokeWidth="1" rx="8" />
        <text x="60" y="305" fontSize="12" fontWeight="bold" fill="#333">Distribution Analysis</text>
        <line x1="50" y1="320" x2="380" y2="320" stroke="#e5e7eb" strokeWidth="1" />

        {/* Bar chart */}
        <rect x="60" y="340" width="30" height="100" fill="#6b7280" opacity="0.6" />
        <rect x="100" y="320" width="30" height="120" fill="#6b7280" opacity="0.7" />
        <rect x="140" y="330" width="30" height="110" fill="#6b7280" opacity="0.65" />
        <rect x="180" y="310" width="30" height="130" fill="#6b7280" opacity="0.75" />
        <rect x="220" y="340" width="30" height="100" fill="#6b7280" opacity="0.6" />
        <rect x="260" y="350" width="30" height="90" fill="#6b7280" opacity="0.55" />
        <rect x="300" y="330" width="30" height="110" fill="#6b7280" opacity="0.65" />

        {/* Query section */}
        <rect x="410" y="280" width="350" height="220" fill="white" stroke="#d1d5db" strokeWidth="1" rx="8" />
        <text x="430" y="305" fontSize="12" fontWeight="bold" fill="#333">Ask Questions</text>
        <line x1="420" y1="320" x2="750" y2="320" stroke="#e5e7eb" strokeWidth="1" />

        <rect x="430" y="340" width="310" height="35" fill="#f3f4f6" stroke="#d1d5db" rx="4" />
        <text x="445" y="363" fontSize="11" fill="#666">What is the average value by category?</text>

        <rect x="430" y="390" width="310" height="80" fill="#f3f4f6" stroke="#d1d5db" rx="4" />
        <text x="445" y="410" fontSize="11" fill="#333" fontWeight="bold">Answer:</text>
        <text x="445" y="430" fontSize="11" fill="#666">Category A: 234.5 | Category B: 187.2</text>
        <text x="445" y="450" fontSize="11" fill="#666">Category C: 312.8 | Category D: 156.9</text>
      </svg>
    ),
  };

  return screenshots[domainTag] || screenshots.ANALYTICS;
}
