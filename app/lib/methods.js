export default [
  // ----------------------------
  // Raw Transactions API Methods
  // ----------------------------

  // createrawtransaction[{ "txid": "id", "vout": n },...] { "address": amount,... }
  // 'createrawtransaction',
  // decoderawtransaction "hexstring"
  // 'decoderawtransaction',
  // decodescript "hex"
  // 'decodescript',
  // getrawtransaction "txid"(verbose)
  // 'getrawtransaction',
  // sendrawtransaction "hexstring"(allowhighfees)
  // 'sendrawtransaction',
  // signrawtransaction "hexstring"([{ "txid": "id", "vout": n, "scriptPubKey": "hex", "redeemScript": "hex" }, ...]["privatekey1",...]sighashtype)
  // 'signrawtransaction',


  // ---------------------
  // Utilities API Methods
  // ---------------------

  // createmultisig nrequired["key",...]
  // 'createmultisig',
  // estimatefee nblocks
  'estimatefee',
  // estimatepriority nblocks
  'estimatepriority',
  // get total network hashpower
  'getnetworkhashps',
  // get current block count
  'getblockcount',
  // validateaddress "bitcoinaddress"
  'validateaddress',
  // verifymessage "bitcoinaddress" "signature" "message"
  // 'verifymessage',


  // ------------------
  // Wallet API Methods
  // ------------------

  // addmultisigaddress nrequired["key",...]("account")
  // 'addmultisigaddress',
  // backupwallet "destination"
  'backupwallet',
  // dumpprivkey "zcashaddress"
  'dumpprivkey',
  // dumpwallet "filename"
  'dumpwallet',
  // encryptwallet "passphrase"
  'encryptwallet',
  // getaccount "zcashaddress"
  // 'getaccount',
  // getaccountaddress "account"
  // 'getaccountaddress',
  // getaddressesbyaccount "account"
  // 'getaddressesbyaccount',
  // getbalance("account" minconf includeWatchonly)
  // 'getbalance',
  // getnewaddress("account")
  // 'getnewaddress',
  // getrawchangeaddress
  // 'getrawchangeaddress',
  // getreceivedbyaccount "account"(minconf)
  // 'getreceivedbyaccount',
  // getreceivedbyaddress "zcashaddress"(minconf)
  // 'getreceivedbyaddress',
  // gettransaction "txid"(includeWatchonly)
  // 'gettransaction',
  // getunconfirmedbalance
  // 'getunconfirmedbalance',
  // getwalletinfo
  // 'getwalletinfo',
  // importaddress "address"("label" rescan)
  // 'importaddress',
  // importprivkey "zcashprivkey"("label" rescan)
  // 'importprivkey',
  // importwallet "filename"
  // 'importwallet',
  // keypoolrefill(newsize)
  // 'keypoolrefill',
  // listaccounts(minconf includeWatchonly)
  // 'listaccounts',
  // listaddressgroupings
  // 'listaddressgroupings',
  // listlockunspent
  // 'listlockunspent',
  // listreceivedbyaccount(minconf includeempty includeWatchonly)
  // 'listreceivedbyaccount',
  // listreceivedbyaddress(minconf includeempty includeWatchonly)
  // 'listreceivedbyaddress',
  // listsinceblock("blockhash" target - confirmations includeWatchonly)
  // 'listsinceblock',
  // listtransactions("account" count from includeWatchonly)
  // 'listtransactions',
  // listunspent(minconf maxconf["address",...])
  // 'listunspent',
  // lockunspent unlock[{ "txid": "txid", "vout": n },...]
  // 'lockunspent',
  // move "fromaccount" "toaccount" amount(minconf "comment")
  // 'move',
  // sendfrom "fromaccount" "tozcashaddress" amount(minconf "comment" "comment-to")
  'sendfrom',
  // sendmany "fromaccount" { "address": amount,... } (minconf "comment"["address",...] )
  // 'sendmany',
  // sendtoaddress "zcashaddress" amount("comment" "comment-to" subtractfeefromamount)
  'sendtoaddress',
  // setaccount "zcashaddress" "account"
  // 'setaccount',
  // settxfee amount
  // 'settxfee',
  // signmessage "zcashaddress" "message"
  // 'signmessage',


  // -----------------------------
  // Private Z Address API Methods
  // -----------------------------

  // z_exportkey "zaddr"
  'z_exportkey',
  // z_exportwallet "filename"
  'z_exportwallet',
  // z_getbalance "address"(minconf)
  'z_getbalance',
  // z_getnewaddress
  'z_getnewaddress',
  // z_getoperationresult(["operationid", ... ])
  'z_getoperationresult',
  // z_getoperationstatus(["operationid", ... ])
  'z_getoperationstatus',
  // z_gettotalbalance(minconf)
  'z_gettotalbalance',
  // z_importkey "zkey"(rescan)
  'z_importkey',
  // z_importwallet "filename"
  'z_importwallet',
  // z_listaddresses
  'z_listaddresses',
  // z_listoperationids
  'z_listoperationids',
  // z_listreceivedbyaddress "address"(minconf)
  'z_listreceivedbyaddress',
  // z_sendmany "fromaddress"[{ "address":... , "amount":...},...](minconf)
  'z_sendmany',
  // zcbenchmark benchmarktype samplecount
  'zcbenchmark',
  // zcrawjoinsplit rawtx inputs outputs vpub_old vpub_new
  'zcrawjoinsplit',
  // zcrawkeygen
  'zcrawkeygen',
  // zcrawreceive zcsecretkey encryptednote
  'zcrawreceive',
  // zcsamplejoinsplit
  'zcsamplejoinsplit',
];

