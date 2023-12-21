function getOccupiedExceptTarget(allOccupiedCords,shipCords) {
    const remSpots = allOccupiedCords.filter(item =>
        !shipCords.some(shipCoord =>
          item.every((val, index) => val === shipCoord[index])
        )
      );
      return remSpots;
}

export default getOccupiedExceptTarget;