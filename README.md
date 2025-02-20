# Donation Contract

## Deskripsi
Donation Contract adalah smart contract yang memungkinkan pengguna untuk menyumbangkan ETH dan memungkinkan pemilik untuk menarik saldo yang telah dikumpulkan. Tujuan dibuatnya program ini hanyalah untuk pembelajaran.

## Fitur
- Pengguna bisa mengirim ETH sebagai donasi.
- Total donasi tersimpan dalam kontrak.
- Pemilik kontrak bisa menarik saldo donasi.
- Event logging untuk setiap transaksi.

## Cara Deploy & Interaksi
1. Clone repository ini.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Jalankan Hardhat:
   ```sh
   npx hardhat test
   ```
4. Deploy kontrak:
   ```sh
   npx hardhat run scripts/deploy.js --network hardhat
   ```
5. Interaksi dengan kontrak:
   ```sh
   npx hardhat run scripts/interact.js --network hardhat
   ```
