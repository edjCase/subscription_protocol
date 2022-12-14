import Content "./Content";

module {

    public type Id = Text;
    public type ChannelId = Text;

    public type Subscription = {
        id : Id;
        callback : Callback;
        channels : [Text];
    };

    public type Callback = shared (update : CallbackArgs) -> async CallbackResult;

    public type CallbackArgs = {
        message : {
            #newContent : Content.Content;
            #changeOwner : Principal;
        };
        userId : Principal;
        subscriptionId : Id;
        channelId : Text;
    };

    public type AddRequest = {
        id : Id;
        callback : Callback;
        channels : [ChannelId];
    };

    public type UpdateRequest = {
        id : Id;
        callback : ?Callback;
        channels : ?{
            #add : [ChannelId];
            #remove : [ChannelId];
            #set : [ChannelId];
        };
    };

    public type DeleteRequest = {
        id : Id;
    };

    public type AddResult = {
        #ok;
        #alreadyExists;
        #notAuthenticated;
    };

    public type UpdateResult = {
        #ok;
        #notFound;
        #notAuthenticated;
    };

    public type DeleteResult = {
        #ok;
        #notFound;
        #notAuthenticated;
    };

    public type GetResult = {
        #ok : Subscription;
        #notFound;
        #notAuthenticated;
    };

    public type CallbackResult = {
        #accepted;
        #notAuthorized;
    };
};
