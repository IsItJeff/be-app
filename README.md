# BE-App

linked to firebase firestore authentication. The only visible endpoint will be /api/login, once user has logged in successfully all other endpoints will be accessible.

## Standard api list:
```
/api (get)
/api/login (post)
/api/users (get, post)
/api/users/:userId (patch , delete)
/api/orders (get, post)
/api/orders/:orderId (get , patch , delete)
```
## Fabrication api:

>Branchs:
```
/api/fabrications/branchs (get , post)
/api/fabrications/:branchId (get , patch , delete)
```
>Chimneys:
```
/api/fabrications/chimneys (get , post)
/api/fabrications/:chimneyId (get , patch , delete)
```
>Claddings:
```
/api/fabrications/claddings (get , post)
/api/fabrications/:claddingId (get , patch , delete)
```
>Cones:
```
/api/fabrications/cones (get , post)
/api/fabrications/:coneId (get , patch , delete)
```
>Gussets:
```
/api/fabrications/gussets (get , post)
/api/fabrications/:gussetId (get , patch , delete)
```
>Insulations:
```
/api/fabrications/insulations (get , post)
/api/fabrications/:insulationId (get , patch , delete)
```
>Rectangles:
```
/api/fabrications/rectangles (get , post)
/api/fabrications/:rectangleId (get , patch , delete)
```
>Rings:
```
/api/fabrications/ringss (get , post)
/api/fabrications/:ringId (get , patch , delete)
```
>Top Caps:
```
/api/fabrications/topCaps (get , post)
/api/fabrications/:topCapId (get , patch , delete)
```
>Tubes:
```
/api/fabrications/tubes (get , post)
/api/fabrications/:tubeId (get , patch , delete)
```