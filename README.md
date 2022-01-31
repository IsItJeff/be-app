# BE-App

linked to firebase firestore authentication. The only visible endpoint will be /api/login, once user has logged in successfully all other endpoints will be accessible.

api list:
```
/api (get)
/api/login (post)
/api/users (get, post)
/api/users/:userId (patch , delete)
/api/orders (get, post)
/apo/orders/:orderId (patch , delete)
```