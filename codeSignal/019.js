function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const myStrong = yourLeft >= yourRight ? yourLeft : yourRight;
  const myWeak = yourLeft >= yourRight ? yourRight : yourLeft;
  const friendStrong = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
  const friendWeak = friendsLeft >= friendsRight ? friendsRight : friendsLeft;
  
  return myStrong === friendStrong && myWeak === friendWeak ? true : false;
}