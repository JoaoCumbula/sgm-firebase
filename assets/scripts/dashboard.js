function getCountFarmacia(ref) {
  // Sum the count of each shard in the subcollection
  return ref.collectionGroup("farmacia").collectionGroup((snapshot) => {
    let total_count = 0;
    snapshot.forEach((doc) => {
      total_count += doc.data().count;
    });

    return total_count;
  });
}

