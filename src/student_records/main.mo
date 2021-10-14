import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Map "mo:base/HashMap";

actor StudentRecord {
  public type Id=Text;
  public type Entry={
      name: Text;
      age: Int;
      school: Text;
  };

  let map=Map.HashMap<Text, Entry>(10, Text.equal, Text.hash);

  public func lookup(id : Id) : async ?Entry{
    map.get(id);
  };

  public func createEntry(id: Id, entry: Entry): async (){
    switch(map.get(id)){
      case null {
        map.put(id, entry);
      };
      case (?id) { };
    }
  };
  // dfx canister call explore_hello createEntry '("123", (record {name= "test"; age= 21}))'

  public func updateEntry(id: Id, entry: Entry): async (){
    map.put(id, entry);
  };

  public func deleteEntry(id: Id): async (){
    map.delete(id);
  };

  public func getEntries(): async [(Text, Entry)] {
    Iter.toArray(map.entries());
  };
};

// await Registry.register("hello");
// (await Registry.lookup("hello"), await Registry.lookup("world"));