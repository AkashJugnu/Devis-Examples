'use strict';

function insert(args, done) {
    let newData = new(args['Schema'])(args.data);
    newData.save((err) => {
        done(err, newData);
    });

}

function find(args, done) {
    args['Schema'].find(args.conditions, (err, result) => {
      if(result.length==0) err={error:"Field Does Not Exist"};
        done(err, result);
    });
}

function update(args, done) {
    let callback = (err, result) => {
        done(err, result);
    };
    // Model.update(conditions, update, [options], [callback])
    // update `multi`ple tasks from complete false to true
    //Model.findByIdAndUpdate(id, [update], [options], [callback])
    //Model.findOneAndUpdate([conditions], [update], [options], [callback])
    if (!args.options) args.options = {};
    if (args.multi === true)
        args['Schema'].update(args.conditions, args.update, args.options, callback);


    else
    if (args.id)
        args['Schema'].findByIdAndUpdate(args.id, args.update, args.options, callback);
    else
        args['Schema'].findOneAndUpdate(args.conditions, args.update, args.options, callback);
}

function delet(args, done) {
    let callback = (err, result) => {
        done(err, result);
    };
    // Model.update(conditions, update, [options], [callback])
    // update `multi`ple tasks from complete false to true
    //Model.findByIdAndUpdate(id, [update], [options], [callback])
    //Model.findOneAndUpdate([conditions], [update], [options], [callback])
    if (!args.options) args.options = {};
    if (args.multi === true)
        args['Schema'].remove(args.conditions, callback);


    else
    if (args.id)
        args['Schema'].findByIdAndRemove(id, args.options, callback);
    else
        args['Schema'].findOneAndRemove(args.conditions, args.options, callback);
}
module.exports = {
    insert: insert,
    delet: delet,
    update: update,
    find: find
}
