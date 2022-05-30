For fetching the bank details REST service is created , using the data given  and it is written in Nodejs , with  the Postman  Platform to send requests and recieved the response in JSON format Atlast, hosted it on Heroku.
1. Branch API to return possible matches based on the branch name ordered by IFSC code (ascending order) with limit and offset.

Endpoint:

```
/api/branch?q=<>
```

REQUEST URL :

```
/api/branch?q=RTGS&limit=1&offset=1
```

SUCCESS RESPONSE :

```json
{"branches": [{"ifsc": "ABNA0000001","bank_id": "110","branch": "RTGS-HO",      "address": "414 EMPIRE COMPLEX, SENAPATI BAPAT MARG LOWER PAREL WEST MUMBAI 400013","city": "MUMBAI","district": "GREATER BOMBAY","state": "MAHARASHTRA"}]}
```

1. Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.

Endpoint:

```
/api/search?q=<>
```

REQUEST URL :

```
/api/search?q=Mumbai&limit=2&offset=1
```

SUCCESS RESPONSE :

```json
{"branches": [{"ifsc": "ABHY0065002","bank_id": "60","branch": "ABHYUDAYA NAGAR","address": "ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033","city": "MUMBAI","district": "GREATER MUMBAI",      "state": "MAHARASHTRA"},{"ifsc": "ABHY0065003","bank_id": "60","branch": "BAIL BAZAR","address": "KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070","city": "MUMBAI","district": "GREATER MUMBAI","state": "MAHARASHTRA"}]}
