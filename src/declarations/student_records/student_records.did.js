export const idlFactory = ({ IDL }) => {
  const Id = IDL.Text;
  const Entry = IDL.Record({
    'age' : IDL.Int,
    'school' : IDL.Text,
    'name' : IDL.Text,
  });
  return IDL.Service({
    'createEntry' : IDL.Func([Id, Entry], [], []),
    'deleteEntry' : IDL.Func([Id], [], []),
    'getEntries' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, Entry))], []),
    'lookup' : IDL.Func([Id], [IDL.Opt(Entry)], []),
    'updateEntry' : IDL.Func([Id, Entry], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
